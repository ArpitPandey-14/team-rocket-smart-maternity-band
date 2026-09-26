// Mobile App Demo Datasets - All strictly labelled DEMO DATA
// Conforms to Section 21, 21A, 21B, 21C of project brief

export const todayMetrics = [
  {
    id: "hr",
    label: "Maternal Heart Rate",
    sensor: "MAX30102 PPG Optical",
    value: "78",
    unit: "BPM",
    zone: "Resting Baseline",
    zoneType: "normal",
    trend: "+2 bpm from avg",
    badge: "DEMO DATA"
  },
  {
    id: "spo2",
    label: "Blood Oxygen (SpO₂)",
    sensor: "MAX30102 PPG Optical",
    value: "98.4",
    unit: "%",
    zone: "Stable Saturation",
    zoneType: "normal",
    trend: "Normal Range",
    badge: "DEMO DATA"
  },
  {
    id: "bp",
    label: "Blood Pressure",
    sensor: "via paired wrist device",
    subnote: "Paired external device — not measured directly by belt",
    value: "114 / 74",
    unit: "mmHg",
    zone: "Normal Baseline",
    zoneType: "normal",
    trend: "Stable Range",
    badge: "DEMO DATA"
  },
  {
    id: "temp",
    label: "Skin / Body Temp",
    sensor: "TMP117 Precision Sensor",
    value: "36.8",
    unit: "°C",
    zone: "Optimal Range",
    zoneType: "normal",
    trend: "Stable",
    badge: "DEMO DATA"
  },
  {
    id: "fetal_kicks",
    label: "Fetal Kick Count (Today)",
    sensor: "Piezo-Film Flex Array",
    value: "32",
    unit: "kicks logged",
    zone: "Active Movement Window",
    zoneType: "active",
    trend: "+6 kicks vs yesterday",
    badge: "DEMO DATA"
  },
  {
    id: "belt_fit",
    label: "Belt Fit / Growth Stage",
    sensor: "Rotary Extension Sensor",
    value: "Tri 2 (Mid)",
    unit: "Circumference: 84 cm",
    zone: "Panel 1 Engaged",
    zoneType: "info",
    trend: "Design target reference",
    badge: "DEMO DATA"
  },
  {
    id: "pressure_balance",
    label: "4-Zone Pressure Fit",
    sensor: "FSR402 Bilateral Array",
    value: "Balanced",
    unit: "Front 30% · Left 20% · Right 20% · Back 30%",
    zone: "Optimal Ergonomic Fit",
    zoneType: "normal",
    trend: "Symmetric",
    badge: "DEMO DATA"
  },
  {
    id: "posture",
    label: "Posture / Motion Status",
    sensor: "LSM6DSOX 6-Axis IMU",
    value: "Upright / Gentle Walk",
    unit: "Gait: Steady",
    zone: "Active Stance",
    zoneType: "info",
    trend: "Status chip (not diagnosis)",
    badge: "DEMO DATA"
  }
];

export const eddUserEntry = {
  title: "Expected Delivery Date (EDD)",
  date: "October 24, 2026",
  source: "As entered by user / clinician",
  disclaimer: "Not a sensor prediction — standard EDD entered manually.",
  gestationalAge: "Week 26, Day 4 (Trimester 2)"
};

export const trendData7Days = [
  { day: "Mon", hr: 76, spo2: 98.2, kicks: 28, sleep: 7.4, circumference: 83.8 },
  { day: "Tue", hr: 78, spo2: 98.5, kicks: 34, sleep: 7.8, circumference: 83.9 },
  { day: "Wed", hr: 75, spo2: 98.0, kicks: 26, sleep: 6.9, circumference: 84.0 },
  { day: "Thu", hr: 79, spo2: 98.6, kicks: 38, sleep: 8.1, circumference: 84.0 },
  { day: "Fri", hr: 77, spo2: 98.3, kicks: 30, sleep: 7.2, circumference: 84.1 },
  { day: "Sat", hr: 74, spo2: 98.7, kicks: 35, sleep: 8.4, circumference: 84.2 },
  { day: "Sun", hr: 78, spo2: 98.4, kicks: 32, sleep: 7.9, circumference: 84.2 }
];

export const trendData30Days = [
  { day: "W1-1", hr: 74, spo2: 98.0, kicks: 24, sleep: 7.2, circumference: 82.5 },
  { day: "W1-4", hr: 75, spo2: 98.4, kicks: 26, sleep: 7.5, circumference: 82.8 },
  { day: "W2-1", hr: 76, spo2: 98.2, kicks: 29, sleep: 7.1, circumference: 83.1 },
  { day: "W2-4", hr: 77, spo2: 98.5, kicks: 31, sleep: 7.8, circumference: 83.4 },
  { day: "W3-1", hr: 75, spo2: 98.1, kicks: 28, sleep: 7.0, circumference: 83.7 },
  { day: "W3-4", hr: 78, spo2: 98.6, kicks: 33, sleep: 8.0, circumference: 83.9 },
  { day: "W4-1", hr: 77, spo2: 98.3, kicks: 35, sleep: 7.6, circumference: 84.1 },
  { day: "W4-4", hr: 78, spo2: 98.4, kicks: 32, sleep: 7.9, circumference: 84.2 }
];

export const guidanceSuggestions = [
  {
    category: "Movement & Ergonomics",
    title: "Gentle 15-Minute Stroll",
    description: "Posture telemetry notes 90 minutes of seated posture. A brief, gentle walk can encourage venous circulation and ease lower back pressure.",
    disclaimer: "General wellness tip — not a medical recommendation. Consult your doctor for personalized advice."
  },
  {
    category: "Hydration & Rest",
    title: "Hydration Check-in",
    description: "Steady hydration supports maternal amniotic fluid balance and muscle relaxation. Keep a glass of fresh water nearby.",
    disclaimer: "General wellness tip — not a medical recommendation. Consult your doctor for personalized advice."
  },
  {
    category: "Rest & Sleep Support",
    title: "Left-Lateral Rest Position",
    description: "When lying down, resting on the left side with a supportive pillow helps maintain optimal uterine-placental perfusion.",
    disclaimer: "General wellness tip — not a medical recommendation. Consult your doctor for personalized advice."
  },
  {
    category: "Physical Exercise",
    title: "Light Pelvic Tilts & Breathing",
    description: "Gentle prenatal stretching while seated assists the band's lumbar counterweight in releasing lower sacral tension.",
    disclaimer: "General wellness tip — not a medical recommendation. Consult your doctor for personalized advice."
  }
];
