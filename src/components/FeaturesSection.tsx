import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Zap, BarChart3, Globe } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full bg-black/5 backdrop-blur-sm border-slate-800 hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="p-3 rounded-full bg-primary/10 mb-4">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Enhanced Security",
      description:
        "Military-grade encryption and decentralized architecture ensures your data remains protected from unauthorized access.",
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Lightning Fast",
      description:
        "Our optimized blockchain processes transactions in milliseconds, outperforming traditional systems by orders of magnitude.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Transparent Analytics",
      description:
        "Real-time insights and comprehensive reporting tools give you complete visibility into your blockchain operations.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Scalability",
      description:
        "Built for enterprise-level demands with the ability to scale seamlessly as your blockchain needs grow worldwide.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing Blockchain Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge solutions deliver unparalleled performance,
            security, and scalability for your business needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
