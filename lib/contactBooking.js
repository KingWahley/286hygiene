export function getBookingMessage(service) {
  return `Hello, I would like to book ${service}. Please share availability, pricing, and the next steps.`;
}

export function getContactBookingHref(service) {
  const params = new URLSearchParams({
    service,
    message: getBookingMessage(service)
  });

  return `/contact?${params.toString()}#contact-form`;
}
