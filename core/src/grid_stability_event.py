class GridStabilityEvent:
    def __init__(self, time: str, location: str, cause: str, mitigation_actions: list):
        self.time = time
        self.location = location
        self.cause = cause
        self.mitigation_actions = mitigation_actions

# Usage example:
event = GridStabilityEvent(
    time="2024-05-19 12:00:00",
    location="Grid Sector 5",
    cause="Overload",
    mitigation_actions=["Reduce load", "Activate backup generators"]
)
print(f"Event: {event.time}, Location: {event.location}, Cause: {event.cause}")
