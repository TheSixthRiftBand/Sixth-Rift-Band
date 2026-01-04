export default function Bubbles() {
  return (
    <div className="bubbles-container">
      <div className="bubble" style={{ width: '100px', height: '100px', left: '10%', top: '20%', animationDelay: '0s' }}></div>
      <div className="bubble" style={{ width: '150px', height: '150px', left: '70%', top: '10%', animationDelay: '2s' }}></div>
      <div className="bubble" style={{ width: '80px', height: '80px', left: '40%', top: '60%', animationDelay: '4s' }}></div>
      <div className="bubble" style={{ width: '120px', height: '120px', left: '80%', top: '70%', animationDelay: '1s' }}></div>
      <div className="bubble" style={{ width: '200px', height: '200px', left: '20%', top: '80%', animationDelay: '3s' }}></div>
      <div className="bubble" style={{ width: '90px', height: '90px', left: '50%', top: '30%', animationDelay: '5s' }}></div>
    </div>
  );
}
