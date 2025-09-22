import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfoIcon, PlayIcon, PauseIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Block {
  id: number;
  hash: string;
  prevHash: string;
  data: string;
  timestamp: number;
}

const BlockchainVisualization = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isAnimating, setIsAnimating] = useState(true);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const animationRef = useRef<number | null>(null);

  // Generate a simple hash
  const generateHash = () => {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  };

  // Initialize blockchain with genesis block
  useEffect(() => {
    const genesisBlock: Block = {
      id: 0,
      hash: generateHash(),
      prevHash: "0000000000000000",
      data: "Genesis Block",
      timestamp: Date.now(),
    };

    setBlocks([genesisBlock]);

    // Add blocks periodically if animation is on
    const addBlockPeriodically = () => {
      if (isAnimating) {
        addNewBlock();
      }
      animationRef.current = window.setTimeout(addBlockPeriodically, 3000);
    };

    animationRef.current = window.setTimeout(addBlockPeriodically, 3000);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [isAnimating]);

  // Add a new block to the chain
  const addNewBlock = () => {
    setBlocks((prevBlocks) => {
      const lastBlock = prevBlocks[prevBlocks.length - 1];
      const newBlock: Block = {
        id: lastBlock.id + 1,
        hash: generateHash(),
        prevHash: lastBlock.hash,
        data: `Transaction data ${lastBlock.id + 1}`,
        timestamp: Date.now(),
      };

      // Keep only the last 5 blocks for visualization
      const newBlocks = [...prevBlocks, newBlock];
      if (newBlocks.length > 5) {
        return newBlocks.slice(newBlocks.length - 5);
      }
      return newBlocks;
    });
  };

  // Toggle animation
  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="w-full py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">How Our Blockchain Works</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Visualize the secure, transparent, and immutable nature of our
            blockchain technology. Each block contains transaction data linked
            to the previous block, creating an unbreakable chain.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <Button
            onClick={toggleAnimation}
            variant="outline"
            className="flex items-center gap-2 text-white border-white hover:bg-slate-800"
          >
            {isAnimating ? <PauseIcon size={16} /> : <PlayIcon size={16} />}
            {isAnimating ? "Pause Animation" : "Start Animation"}
          </Button>
          <Button
            onClick={addNewBlock}
            variant="outline"
            className="ml-4 flex items-center gap-2 text-white border-white hover:bg-slate-800"
          >
            Add Block Manually
          </Button>
        </div>

        <div className="relative overflow-hidden py-8">
          {/* Blockchain visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto py-8 px-4">
            {blocks.map((block, index) => (
              <div key={block.id} className="flex flex-col items-center">
                {/* Block */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    setActiveBlock(activeBlock === block.id ? null : block.id)
                  }
                  className="relative"
                >
                  <Card
                    className={`w-64 h-64 flex flex-col justify-between bg-slate-800 border-slate-600 cursor-pointer ${activeBlock === block.id ? "ring-2 ring-blue-500" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="text-sm font-mono mb-2 text-blue-400">
                        Block #{block.id}
                      </div>
                      <div className="text-xs mb-2">
                        <span className="text-slate-400">Timestamp:</span>
                        <div className="font-mono text-slate-300 truncate">
                          {new Date(block.timestamp).toLocaleTimeString()}
                        </div>
                      </div>
                      <div className="text-xs mb-2">
                        <span className="text-slate-400">Data:</span>
                        <div className="font-mono text-slate-300 truncate">
                          {block.data}
                        </div>
                      </div>
                      <div className="text-xs mb-2">
                        <span className="text-slate-400">Previous Hash:</span>
                        <div className="font-mono text-slate-300 truncate">
                          {block.prevHash}
                        </div>
                      </div>
                      <div className="text-xs">
                        <span className="text-slate-400">Hash:</span>
                        <div className="font-mono text-slate-300 truncate">
                          {block.hash}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="absolute -top-2 -right-2 bg-blue-500 rounded-full p-1">
                          <InfoIcon size={16} />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Click to see block details</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </motion.div>

                {/* Chain link */}
                {index < blocks.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="hidden md:flex w-8 h-1 bg-blue-500 mt-4 mb-4"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Animated particles in background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-blue-500 rounded-full opacity-20"
                style={{
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="font-bold mb-2">Immutable</h4>
              <p className="text-slate-300 text-sm">
                Once data is recorded, it cannot be altered without changing all
                subsequent blocks.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="font-bold mb-2">Transparent</h4>
              <p className="text-slate-300 text-sm">
                All transactions are visible to authorized network participants,
                ensuring accountability.
              </p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h4 className="font-bold mb-2">Secure</h4>
              <p className="text-slate-300 text-sm">
                Cryptographic hashing ensures data integrity and prevents
                tampering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockchainVisualization;
