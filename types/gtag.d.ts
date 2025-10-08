interface Window {
  gtag?: (
    event: "event",
    action: string,
    params: { [key: string]: string | number }
  ) => void;
}
