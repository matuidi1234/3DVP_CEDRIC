const services = [
  { id: 1, name: 'Cloud Hosting', description: 'Secure and scalable cloud hosting', price: 9.99 },
  { id: 2, name: 'DevOps Consulting', description: 'Expert DevOps consulting services', price: 49.99 },
  { id: 3, name: 'Kubernetes Training', description: 'Comprehensive Kubernetes training', price: 199.99 }
];

exports.getAllServices = (req, res) => {
  res.json(services);
};

exports.getServiceById = (req, res) => {
  const id = parseInt(req.params.id);
  const service = services.find(s => s.id === id);
  if (!service) return res.status(404).json({ error: 'Service not found' });
  res.json(service);
};