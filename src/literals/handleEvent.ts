type click = { type: "click"; x: number; y: number };
type keypress = { type: "keypress"; key: string };
type mouseover = { type: "mouseover"; elementId: string };
type scroll = { type: "scroll"; direction: "up" | "down" };
type eventType = click | keypress | mouseover | scroll;

function handleEvent(event: eventType) {
  switch (event.type) {
    case "click":
      return `Clicked at coordinates (${event.x}, ${event.y})`;
      break;
    case "keypress":
      return `Key pressed: ${event.key}`;
      break;
    case "mouseover":
      return `Mouse over element with ID: ${event.elementId}`;
      break;
    default:
      return "Unknown event type";
  }
}

handleEvent({ type: "click", x: 100, y: 200 }); // ✅ Valid
// handleEvent({ type: "scroll", direction: "left" }); // ❌ Type '"left"' is not assignable to type '"up" | "down"'.
