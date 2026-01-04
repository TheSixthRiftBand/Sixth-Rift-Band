import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSubscriberSchema } from "@shared/schema";
import session from "express-session";
import MemoryStoreInit from "memorystore";

const MemoryStore = MemoryStoreInit(session);

export async function registerRoutes(app: Express): Promise<Server> {
  app.use(
    session({
      cookie: { maxAge: 86400000 },
      store: new MemoryStore({
        checkPeriod: 86400000,
      }),
      resave: false,
      saveUninitialized: false,
      secret: "cosmic-rift-secret",
    })
  );

  app.post("/api/subscribe", async (req, res) => {
    const result = insertSubscriberSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Invalid email" });
    }
    const subscriber = await storage.createSubscriber(result.data);
    res.json(subscriber);
  });

  app.post("/api/admin/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await storage.getUserByUsername(username);
    if (user && user.password === password) {
      (req.session as any).userId = user.id;
      return res.json({ success: true });
    }
    res.status(401).json({ error: "Invalid credentials" });
  });

  app.get("/api/admin/subscribers", async (req, res) => {
    if (!(req.session as any).userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const subscribers = await storage.getSubscribers();
    res.json(subscribers);
  });

  const httpServer = createServer(app);
  return httpServer;
}
