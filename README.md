# Commercial Value Architecture

An interactive tool for visualizing the structural tensions that shape organizational form and function.

![Commercial Value Architecture Screenshot](./screenshot.png)

## Overview

The Commercial Value Architecture is a framework for understanding how organizations balance four key forces:

- **Wall Street** (Investors): Views the corporation as an Asset
- **Customers**: Views the corporation as a Supplier
- **Employees**: Views the corporation as a Paycheck
- **Main Street** (Market): Views the corporation as an Organism

This interactive visualization allows executives and consultants to explore how tensions between these forces affect organizational health and performance.

## Documentation

- [Agile Program Management Guide](docs/agile-program-management.md)
- [Developer Documentation](commercial-value-architecture-docs.md)

# Commercial Value Architecture

An interactive tool for visualizing the structural tensions that shape organizational form and function.

![Commercial Value Architecture](https://via.placeholder.com/800x400?text=Commercial+Value+Architecture)

## The Executive Challenge

CEOs and CFOs are uniquely positioned at the intersection of four major forces shaping their organization:

- **Wall Street** (Investors): Views the corporation as an Asset
- **Customers**: Views the corporation as a Supplier
- **Employees**: Views the corporation as a Paycheck
- **Main Street** (Market): Views the corporation as an Organism

While executives have visibility across all these domains, they lack a common language to unite these perspectives. This tool provides that framework by visualizing how tensions between these forces affect organizational structure and health.

## Why It Matters

The slight but critical differences between CEO and CFO perspectives (performance-orientation vs. risk-orientation) create subtle biases in decision-making. As these small misalignments cascade through the organization, they amplify into significant gaps between strategic intent and operational reality.

The Commercial Value Architecture visualization allows executives to:

1. Recognize structural tensions in their organization
2. Identify misalignments before they cascade into execution problems
3. Visualize complex organizational dynamics typically invisible at the executive level
4. Make intentional trade-offs with awareness of downstream consequences

## Interactive Features

This tool provides:

- **Dynamic Diamond Visualization**: Manipulate balance points to see how they affect organizational structure
- **Real-time Structural Integrity Assessment**: See how changes impact organizational health
- **Color-Coded Integrity Gauge**: Track health with an animated progress bar
- **Balance Point Controls**: Adjust the four key balance points:
  - **VALUE** (Wall Street ↔ Customers) - Creates "Lift"
  - **DIRECTION** (Wall Street ↔ Employees) - Creates "Drag"
  - **EXCHANGE** (Customers ↔ Market) - Creates "Thrust"
  - **OPERATE** (Employees ↔ Market) - Creates "Weight"

The visualized diamond should maintain its shape for optimal organizational health. Distortions in the shape immediately show areas of misalignment that require attention.

## Implementation

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/commercial-value-architecture.git
cd commercial-value-architecture
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

### Project Structure

```
commercial-value-architecture/
├── src/
│   ├── components/
│   │   └── InteractiveDiamond.tsx     # Main visualization component
│   ├── App.js                         # Root component
│   └── index.js                       # Entry point
├── public/
│   └── index.html                     # HTML template
├── package.json                       # Project configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── .gitignore                         # Git ignore file
├── LICENSE                            # MIT License
└── README.md                          # This file
```

## Usage Guide

The visualization has two main sections:

1. **Diamond Visualization**: Shows the current state of the organization's value architecture
2. **Balance Point Controls**: Allows you to adjust the four balance points

To use the tool:
- Move the sliders to adjust each balance point
- Watch how the diamond shape changes in response
- Monitor the structural integrity indicator for overall organizational health
- Use the "Ideal Form" button to reset to a balanced state
- Use the "Stress Test" button to simulate severe organizational imbalance

### Interpretation Guide

- **Structural Integrity 80%+**: Excellent alignment and potential for growth
- **Structural Integrity 60-79%**: Good alignment with minor adjustments needed
- **Structural Integrity 40-59%**: Moderate misalignment with tensions in key areas
- **Structural Integrity 20-39%**: Significant misalignment likely causing dysfunction
- **Structural Integrity <20%**: Critical misalignment threatening organizational viability

## Future Development

This initial implementation represents the top layer of the Commercial Value Architecture. Future versions will include:

1. Visualization of the six additional layers below the executive level
2. Advanced animation of force field interactions
3. Preset organizational archetypes for comparative analysis
4. Historical state tracking to monitor organizational evolution
5. Export functionality for reports and presentations
6. 3D visualization options

## Built With

- [React](https://reactjs.org/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

Scott Santucci  
Email: scott.santucci@growthenablement.com

## Acknowledgments

- This visualization is designed for executives, consultants, and organizational development professionals
- The framework helps bridge the gap between strategic intent and operational execution
