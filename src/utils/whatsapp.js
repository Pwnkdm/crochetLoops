export const openWhatsApp = (productName) => {
  const phoneNumber = '918930214214'; // User specified number
  const message = productName 
    ? `Hi Crochet Loops, I would like to order ${productName}.`
    : `Hi Crochet Loops, I would like to start a custom order or make an inquiry.`;
    
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
