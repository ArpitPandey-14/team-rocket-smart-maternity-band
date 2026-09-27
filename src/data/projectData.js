// Single Source of Truth - Smart Maternity Band (SIH 2026)
// NO NAMES POLICY: No individual team member names or personal credentials appear here.

export const projectMeta = {
  eventName: "Smart India Hackathon 2026",
  problemId: "SIH26113",
  theme: "HealthTech",
  category: "Hardware",
  teamName: "TEAM Zavaibah",
  teamTagline: "Building technology for safer and more comfortable maternity care.",
  projectTitle: "SMART MATERNITY BAND",
  headline: "Technology for safer, smarter and more comfortable maternity care.",
  subheadline: "A dual-layer wearable combining mechanical anatomical load redistribution with continuous bio-sensing, Bluetooth telemetry, and intelligent emergency response.",
  disclaimer: "Concept demonstration for Smart India Hackathon 2026. The website and simulated interfaces are for demonstration purposes and do not constitute medical diagnosis or emergency services."
};

export const fourZones = [
  {
    id: "front",
    name: "Front Zone",
    location: "Anterior Lower Abdomen",
    character: "Soft — gentle upward support",
    stiffness: "Low (Compliant elastomer & fabric sling)",
    description: "Cradles the growing lower abdomen with compliant fabric cells and elastic panels, directing supportive vectors upward toward the pelvis without compressing fetal space."
  },
  {
    id: "left",
    name: "Left Medial Zone",
    location: "Lateral Flank (Left)",
    character: "Moderate — inward support",
    stiffness: "Medium (Segmented sliding ribs)",
    description: "Stabilizes lateral abdominal expansion using low-friction UHMWPE sliding rails. Resists side shear during gait while adjusting dynamically."
  },
  {
    id: "right",
    name: "Right Medial Zone",
    location: "Lateral Flank (Right)",
    character: "Moderate — inward support",
    stiffness: "Medium (Segmented sliding ribs)",
    description: "Mirrors left medial reinforcement, working with the load-redistributing pulley cable system to balance uneven weight distribution automatically."
  },
  {
    id: "back",
    name: "Back Zone",
    location: "Lumbar Spine & Sacrum",
    character: "Firm — posterior / hip support",
    stiffness: "High (Polyoxymethylene spine & counterweight rail)",
    description: "Transfers abdominal cantilever load directly into the pelvic cradle and sacrum. Features the central electronics pod and dual-IMU telemetry cluster."
  }
];

export const mechanicalFeatures = [
  {
    number: "01",
    title: "Sliding Expansion Panels",
    type: "Ergonomic Growth Adapter",
    materials: "Low-friction nylon / UHMWPE channel rails, flexible TPU ribs",
    description: "Adjacent structural panels telescope over low-friction rails as pregnancy advances. Magnetic and hook-and-loop micro-adjustments lock every 10–15 mm of travel with thin gel load-distributing pads.",
    status: "Prototyped & Verified"
  },
  {
    number: "02",
    title: "Vector Rail / Leaf Spring",
    type: "Load-Transfer Architecture",
    materials: "Composite spring strips & POM structural ribs",
    description: "Curved rails extend from the upper abdomen down into the pelvic cradle. Internal leaf springs absorb energy during torso flexion and assist spinal extension upon standing.",
    status: "Conceptual CAD"
  },
  {
    number: "03",
    title: "Cam-Based Posture Linkage",
    type: "Kinematic Angle Regulator",
    materials: "Precision machined Delrin (POM) cam & follower",
    description: "A small rotating cam mechanism modulates support vector orientation relative to pelvic angle, shifting load dynamically between standing, walking, bending, and sitting modes.",
    status: "Design Exploration"
  },
  {
    number: "04",
    title: "Pulley Tension Redistribution",
    type: "Bilateral Force Balancer",
    materials: "Spectra cord & miniature low-friction pulleys",
    description: "Continuous bilateral cable routing automatically transfers load across flanks when asymmetric posture or uneven weight distribution is detected, preventing focal pressure sores.",
    status: "Bench Concept"
  },
  {
    number: "05",
    title: "Overload Release Clutch",
    type: "Mechanical Safety Capper",
    materials: "Spring-detent safety clutch",
    description: "A mechanically self-limiting overload clutch incorporated into the tensioning line slips if abdominal pressure exceeds preset thresholds, preventing excessive compression.",
    status: "Safety System"
  },
  {
    number: "06",
    title: "Hip Pivot & Torsion Spring",
    type: "Sit-to-Stand Kinetic Assist",
    materials: "6061-T6 Aluminum (3-Axis CNC manufacturable)",
    description: "Positioned over the greater trochanter, this spring-loaded hinge compresses while seated, accumulating kinetic energy that assists quadricep and lumbar extension during standing transitions.",
    status: "3-Axis CNC Prototyped"
  },
  {
    number: "07",
    title: "One-Hand Ratcheting Buckle",
    type: "Accessible Closure Mechanism",
    materials: "Injection-molded nylon with magnetic lead-in",
    description: "Designed for effortless single-handed donning and micro-adjustment by expectant mothers: pull to cinch, tactile clicks confirm locking position, single-lever release for quick removal.",
    status: "Prototype Ready"
  }
];

export const growthStages = [
  {
    stage: "Early Pregnancy (Tri 1)",
    weeks: "Weeks 1 – 12",
    circumference: "~65 – 75 cm",
    mechanismState: "Compact, ribs fully nested",
    supportEmphasis: "Posture guidance, pelvic stabilization, light support",
    isDemo: true
  },
  {
    stage: "Mid Pregnancy (Tri 2)",
    weeks: "Weeks 13 – 27",
    circumference: "~75 – 95 cm",
    mechanismState: "Panel 1 slides out, rails extend",
    supportEmphasis: "Load support increases, lateral flank stabilization",
    isDemo: true
  },
  {
    stage: "Late Pregnancy (Tri 3)",
    weeks: "Weeks 28 – 40+",
    circumference: "~95 – 120 cm",
    mechanismState: "Panels 2 & 3 slide, maximum extension",
    supportEmphasis: "Full pelvic load redistribution, lumbar counterweight balance",
    isDemo: true
  },
  {
    stage: "Postpartum (Recovery)",
    weeks: "0 – 12 Weeks Post-Delivery",
    circumference: "~80 – 95 cm (Tightening)",
    mechanismState: "Ribs re-nest, bilateral tension increases",
    supportEmphasis: "Core recovery, abdominal wall stabilization, gentle compression",
    isDemo: true
  }
];

export const bomComponents = [
  { function: "Main MCU + BLE/Wi-Fi", component: "ESP32-S3 DevKit", qty: 1, costRange: "₹650 – ₹1,500", status: "Selected" },
  { function: "Maternal ECG sensing", component: "Ag/AgCl ECG electrodes/wearable dry ECG", qty: 3, costRange: "₹30 – ₹900", status: "Selected" },
  {function: "ECG signal acquisition", component: "AD8232 ECG AFE module", qty: 1, costRange: "₹250 – ₹500", status: "Selected" },
  { function: "Body/skin temperature", component: "TMP117 ", qty: 1, costRange: "₹150 – ₹450", status: "Selected" },
  { function: "Pelvic motion posture & fall detection", component: "LSM6DSOX ", qty: 1, costRange: "₹500 – ₹1,200", status: "Selected" },
  { function: "Mechanical hip/cam angle", component: "Magnetic rotary encoder AS5600", qty: 1, costRange: "₹500 – ₹1,200", status: "Selected" },
  { function: "Fetal movement sensing", component: "Piezo-film / flexible piezo sensor", qty: "3–4", costRange: "₹100 – ₹250", status: "Selected for prototype " },
  { function: "Maternal abdominal shape", component: "Stretch/extension sensor / rotary encoder", qty: 1, costRange: "₹100 – ₹400", status: "Selected" },
  { function: "Emergency manual SOS", component: "Tactile / push button", qty: 1, costRange: "₹10 – ₹30", status: "Selected" },
  { function: "Local alert (haptic)", component: " Coin Vibration motor", qty: 1, costRange: "₹20 – ₹60", status: "Selected" },
  { function: "Local audio alert", component: "Mini buzzer", qty: 1, costRange: "₹10 – ₹30", status: "Selected" },
  { function: "Battery power", component: "3.7V Li-Po (1500–2000 mAh)", qty: 1, costRange: "₹250 – ₹450", status: "Selected" },
  { function: "Charging management", component: "TP4056 protected module", qty: 1, costRange: "₹20 – ₹50", status: "Selected for prototype" },
  { function: "Battery monitoring", component: "MAX17048 fuel gauge", qty: 1, costRange: "₹100 – ₹300", status: "Selected for prototype" },
  { function: "Data storage backup", component: "MicroSD module", qty: 1, costRange: "₹80 – ₹150", status: "Optional" },
  { function: "Belt pressure monitoring", component: "FSR402 (×4 array)", qty: 4, costRange: "₹155 – ₹350", status: "Selected" },
  { function: "Spring assist force", component: "Load cell", qty: 1, costRange: "₹200 – ₹700", status: "Selected" },

];

export const bomCostSummary = {
  electronicsMin: "₹3,740",
  electronicsMax: "₹9,370",
  electronicsAvg: "~₹6,600",
  totalProductEst: "₹10,000 – ₹20,000",
  disclaimer: "Internal engineering estimates from team working BOM. Not a certified retail bill of materials."
};

export const upgradePaths = [
  { item: "Higher-grade HR/SpO₂", spec: "MAX86141 + MAX32664 biometric hub", stage: "Future Evaluation" },
  { item: "High-density pressure matrix", spec: "Tekscan FlexiForce A201 (×4)", stage: "Future Phase" },
  { item: "Clinical blood pressure", spec: "External validated Bluetooth BP monitor", stage: "Companion Integration" }
];

export const priorArt = [
  {
    type: "App-Connected Heart Rate Band",
    description: "A wearable brand with heart-rate sensors that sync to an app.",
    status: "Ideation / prototype stage; not yet deployed in clinical use.",
    difference: "Does not provide anatomical load-redistributing mechanics or multi-zone physical support."
  },
  {
    type: "Adhesive Sensor Patch",
    description: "A sensor-based adhesive bandage/pad-style device.",
    status: "Clinical monitor concept.",
    difference: "Lacks physical musculoskeletal assistance, posture stabilization, or kinetic sit-to-stand mechanics."
  },
  {
    type: "Premature Birth Prediction Belt",
    description: "A sensor-based belt designed to predict premature birth.",
    status: "Research prototype.",
    difference: "Focuses exclusively on electrohysterography without physical back support, dynamic growth expansion, or emergency SOS cancellation loops."
  }
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "SENSORS COLLECT",
    subtitle: "Real-time Telemetry Acquisition",
    detail: "Ag/AgCl ECG electrodesoptical sensor captures pulse waveforms and SpO2; piezo-film nodes sense subtle fetal kicks; dual LSM6DSOX IMUs sample 6-axis posture and acceleration at 50Hz.",
    metric: "50Hz Sensor Polling"
  },
  {
    step: "02",
    title: "ESP32 PROCESSES",
    subtitle: "On-Device Edge Filtering",
    detail: "Dual-core Xtensa processor runs real-time sensor fusion and digital low-pass filtering. Differentiates physiological mother motion from fetal kicks and rapid fall trajectories.",
    metric: "240MHz Dual-Core"
  },
  {
    step: "03",
    title: "BLE TRANSFERS",
    subtitle: "Low-Energy Broadcast",
    detail: "Data packets are encoded and transmitted via BLE 5.0 Low Energy advertising packets to the paired smartphone with low power consumption.",
    metric: "BLE 5.0 LE Sync"
  },
  {
    step: "04",
    title: "APP ANALYZES",
    subtitle: "Local Data Structuring",
    detail: "The mobile app aggregates telemetry locally on the device, computes daily trends, evaluates 4-zone belt fit balance, and plots kick frequencies.",
    metric: "100% Local Phone Storage"
  },
  {
    step: "05",
    title: "ALERTS & GUIDANCE",
    subtitle: "Actionable Ergonomic Feedback",
    detail: "Provides gentle lifestyle notifications (e.g. hydrate, take a light rest walk) based strictly on posture data, framed as wellness guidance rather than medical prescriptions.",
    metric: "Wellness Lifestyle Nudges"
  },
  {
    step: "06",
    title: "SAFETY RESPONSE",
    subtitle: "Dual-IMU Fall Verification",
    detail: "If sudden impact followed by lack of movement is detected, a 30-second cancellation window begins. If uncancelled, automated push notifications alert emergency contacts.",
    metric: "30s Cancel Window"
  }
];

export const impactPillars = [
  {
    title: "EARLY RISK DETECTION",
    headline: "Proactive Warning Signals",
    description: "Continuous baseline monitoring of maternal pulse and fetal movements helps identify physiological anomalies earlier than intermittent clinic visits.",
    badge: "Continuous Safety"
  },
  {
    title: "RURAL ACCESSIBILITY",
    headline: "Low-Cost Resilient Hardware",
    description: "Built using affordable microcontrollers (ESP32-S3 DevKit) and readily available electronic modules to ensure production viability in tier-2/tier-3 regions.",
    badge: "Democratized Care"
  },
  {
    title: "HEALTHCARE BURDEN MITIGATION",
    headline: "Less Physical Strain",
    description: "Mechanical load redistribution offloads maternal lumbar vertebrae and pelvic ligaments, decreasing late-pregnancy musculoskeletal downtime and medical consultations.",
    badge: "Biomechanics"
  },
  {
    title: "24/7 CONTINUOUS ASSISTANCE",
    headline: "Reassurance & Fall Protection",
    description: "Round-the-clock safety coverage with dual-IMU fall detection and tactile SOS button, offering peace of mind to expectant mothers living independently.",
    badge: "Always-On"
  }
];

export const coreBenefits = [
  {
    num: "01",
    title: "Ergonomic Back Support",
    desc: "Two-panel mechanical support transfers abdominal cantilever load directly into the pelvic cradle, relieving lumbar stress."
  },
  {
    num: "02",
    title: "Automated Safety Loop",
    desc: "Dual-IMU fall detection with a 30-second cancellation buffer ensures emergency contacts are dispatched only when genuinely needed."
  },
  {
    num: "03",
    title: "Hygienic & Detachable",
    desc: "The smart electronics pod detaches in seconds via quick-release magnetic latches, allowing the breathable fabric sling to be laundered safely."
  },
  {
    num: "04",
    title: "Adaptive Growth Fit",
    desc: "Overlapping flexible panels with sliding UHMWPE tracks expand smoothly across Trimester 1, 2, 3, and postpartum recovery."
  },
  {
    num: "05",
    title: "Rest & Sleep Telemetry",
    desc: "Monitors sleep duration and posture transitions to offer restorative lifestyle recommendations."
  },
  {
    num: "06",
    title: "Wellness Guidance",
    desc: "Translates activity and posture trends into gentle daily hydration and rest reminders, free from rigid medical prescriptions."
  }
];

export const whyItMattersComparison = [
  {
    aspect: "Maternal Musculoskeletal Stress",
    without: "Cumulative lumbar strain, pelvic tilt pain, and unassisted sit-to-stand exhaustion.",
    withBelt: "Mechanical 4-zone sling and kinetic hip spring actively offload spine and assist standing."
  },
  {
    aspect: "Fetal Kick Awareness",
    without: "Manual subjective counting prone to anxiety and missed movement events.",
    withBelt: "Piezo-film sensors log passive kick frequency trends continuously over 24 hours."
  },
  {
    aspect: "Emergency Fall Response",
    without: "If an expectant mother falls while alone, alerts depend entirely on manual phone access.",
    withBelt: "Dual-IMU fall algorithm starts an immediate 30-second countdown with automatic alerts."
  },
  {
    aspect: "Wearable Lifecycle Across Pregnancy",
    without: "Standard rigid maternity belts become unusable as belly circumference expands.",
    withBelt: "Telescoping expansion panels grow from 65 cm to 120 cm and re-nest postpartum."
  },
  {
    aspect: "Health Telemetry Continuity",
    without: "Sparse snapshot data captured once a month during brief clinical check-ins.",
    withBelt: "Continuous historical baseline of HR, SpO2, and activity stored privately on user's phone."
  }
];

export const knownLimitations = [
  {
    title: "Belt-Level Blood Pressure & HR Accuracy",
    status: "Hardware Trade-off Under Evaluation",
    description: "Blood pressure and heart rate are notoriously difficult to measure reliably from a flexible belt due to abdominal tissue dampening and motion artifacts. A wrist-worn companion device connecting over BLE is under active evaluation as the clinical-grade alternative."
  },
  {
    title: "Marked Not Currently Feasible Features",
    status: "Rigorously Excluded by Team",
    description: "Predicted delivery date, predicted postpartum recovery time, and real-time belly heatmap visualization were investigated during early ideation and explicitly determined NOT FEASIBLE with wearable non-invasive sensors. We refuse to simulate or market unrealistic AI predictions."
  },
  {
    title: "Core CNC Prototyped Component",
    status: "1 Key Part Prototyped",
    description: "The sitting-to-standing spring-assist mechanism is our single highlighted 3-axis CNC-manufactured aluminum component for physical demonstration. Other mechanical concepts remain bench prototypes."
  },
  {
    title: "BOM Figures are Preliminary Estimates",
    status: "Engineering Reference Only",
    description: "All cost breakdowns (₹3,740–₹9,370 electronics, ₹10,000–₹20,000 total product) represent internal developer bills-of-materials for hackathon prototyping, not finalized manufacturing or retail pricing."
  }
];

// Reusable Team Section Structure (NO INDIVIDUAL NAMES POLICY)
// // ADD REAL TEAM MEMBER INFORMATION HERE IF/WHEN THE TEAM CHOOSES TO PUBLISH IT.
// // Do not populate with invented or placeholder names.
export const teamZavaibahsDisciplines = [
  {
    role: "Mechanical Engineering & Ergonomics",
    focus: "4-Zone support architecture, telescoping UHMWPE sliding rails, and CNC hip assist spring.",
    code: "TEAM Zavaibah — MECH UNIT"
  },
  {
    role: "Embedded Systems & Firmware",
    focus: "ESP32-S3 dual-core firmware, FreeRTOS tasks, BLE 5.0 GATT server, and sensor interrupts.",
    code: "TEAM Zavaibah — FIRMWARE UNIT"
  },
  {
    role: "Biometric Sensing & Signal Processing",
    focus: "Ag/AgCl ECG electrodesPPG conditioning, piezo-film fetal kick filtering, and dual-IMU fall detection logic.",
    code: "TEAM Zavaibah — SENSORS UNIT"
  },
  {
    role: "Mobile App & Data Architecture",
    focus: "Local-first telemetry storage, Recharts analytics, wellness recommendations, and 30s SOS trigger.",
    code: "TEAM Zavaibah — SOFTWARE UNIT"
  }
];
