import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => (
  <section className="p-6" id="projects">
    <h2 className="text-2xl font-semibold mb-4">Projects</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white shadow-md rounded-lg border">
        <h3 className="font-bold text-lg">Textile Printing Controller</h3>
        <p>Replaced legacy firmware using PIC microcontrollers for industrial automation.</p>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }} className="p-4 bg-white shadow-md rounded-lg border">
        <h3 className="font-bold text-lg">VR Dragon Simulator</h3>
        <p>Built a Unity3D multiplayer experience using Photon Engine and spline physics.</p>
      </motion.div>
    </div>
  </section>
);

export default Projects;