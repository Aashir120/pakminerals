import { useNavigate } from 'react-router-dom';

function Success () {
  const navigate = useNavigate();

  let orderId = Math.floor(Math.random() * 1000001);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {orderId
        ? `Order has been created successfully. Your order number is #${orderId}`
        : `Successfull. Your order is being prepared...`}
      <button  className="btn-Checkout" onClick={()=>navigate('/')} style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
    </div>
  );
};

export default Success;
