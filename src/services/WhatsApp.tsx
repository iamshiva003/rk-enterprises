function WhatsApp() {
  const phoneNumber = '917795553155';
  const message = 'Hello, from RK Enterprises';

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
      <button onClick={handleClick}>
        Chat on WhatsApp
      </button>
  );
}


export default WhatsApp