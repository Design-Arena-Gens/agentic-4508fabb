'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface TokenData {
  name: string;
  symbol: string;
  price: number;
  balance: number;
  description: string;
  color: string;
  apy?: string;
  transferable: boolean;
}

export default function TokenomyDashboard() {
  const [tokens, setTokens] = useState<TokenData[]>([
    {
      name: 'XFI Token',
      symbol: 'XFI',
      price: 12.45,
      balance: 15234.67,
      description: 'Governance and base value token',
      color: 'text-xfi-primary',
      apy: '5% APY',
      transferable: true
    },
    {
      name: 'Reality Energy',
      symbol: 'REAL',
      price: 8.92,
      balance: 8943.21,
      description: 'Powers reality manipulation and dimension access',
      color: 'text-xfi-secondary',
      apy: '3% APY',
      transferable: true
    },
    {
      name: 'Conscious Time',
      symbol: 'TIME',
      price: 15.67,
      balance: 3421.89,
      description: 'Represents conscious attention value',
      color: 'text-xfi-accent',
      transferable: true
    },
    {
      name: 'Soul Reputation',
      symbol: 'SOUL',
      price: 0,
      balance: 1847.0,
      description: 'Non-transferable reputation score',
      color: 'text-emerald-400',
      transferable: false
    }
  ]);

  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const value = tokens.reduce((acc, token) => {
      return acc + (token.price * token.balance);
    }, 0);
    setTotalValue(value);
  }, [tokens]);

  const economicMetrics = [
    { label: 'Total Supply', value: '1B XFI', change: '+5%' },
    { label: 'Staking Rewards', value: '40%', change: 'of emissions' },
    { label: 'Creator Rewards', value: '25%', change: 'of emissions' },
    { label: 'Burn Rate', value: '1% + 50%', change: 'tx + fees' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold glow-text text-xfi-primary mb-4">
            Tokenomy Dashboard
          </h2>
          <p className="text-xl text-white/70">Multi-token circular economy</p>
        </motion.div>

        {/* Portfolio Value */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-xfi-primary/20 to-xfi-secondary/20 rounded-lg p-8 mb-8 border border-xfi-primary/30 glow-box"
        >
          <div className="text-center">
            <div className="text-sm text-white/60 mb-2">Total Portfolio Value</div>
            <div className="text-6xl font-bold text-xfi-primary glow-text mb-2">
              ${totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
            <div className="text-xl text-emerald-400">+24.5% (24h)</div>
          </div>
        </motion.div>

        {/* Token Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tokens.map((token, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg p-6 hover:border-xfi-primary transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className={`text-2xl font-bold ${token.color}`}>{token.symbol}</h3>
                  <p className="text-sm text-white/60">{token.name}</p>
                </div>
                {!token.transferable && (
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                    Non-transferable
                  </span>
                )}
              </div>

              <div className="mb-4">
                <div className="text-3xl font-bold text-white mb-1">
                  {token.balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                {token.price > 0 && (
                  <div className="text-sm text-white/60">
                    ${token.price.toFixed(2)} per token
                  </div>
                )}
              </div>

              <p className="text-sm text-white/70 mb-4">{token.description}</p>

              {token.apy && (
                <div className="bg-emerald-500/20 text-emerald-400 px-3 py-2 rounded text-sm font-semibold">
                  {token.apy}
                </div>
              )}

              {token.transferable && (
                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-xfi-primary/20 hover:bg-xfi-primary/30 text-xfi-primary px-4 py-2 rounded transition-all">
                    Stake
                  </button>
                  <button className="flex-1 bg-xfi-secondary/20 hover:bg-xfi-secondary/30 text-xfi-secondary px-4 py-2 rounded transition-all">
                    Trade
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Economic Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-xfi-dark/50 border border-xfi-primary/30 rounded-lg p-8"
        >
          <h3 className="text-3xl font-bold mb-6 text-xfi-primary">Economic Metrics</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {economicMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-xfi-darker/50 rounded-lg p-4 border border-xfi-secondary/20"
              >
                <div className="text-sm text-white/60 mb-2">{metric.label}</div>
                <div className="text-2xl font-bold text-xfi-primary mb-1">{metric.value}</div>
                <div className="text-xs text-xfi-accent">{metric.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Circular Economy Diagram */}
          <div className="bg-gradient-to-r from-xfi-primary/10 to-xfi-secondary/10 rounded-lg p-6 border border-xfi-primary/20">
            <h4 className="text-xl font-bold mb-4 text-xfi-accent">Circular Economy Flow</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <div className="text-sm font-semibold text-xfi-primary mb-1">Emission</div>
                <div className="text-xs text-white/60">5% APY decreasing</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔥</div>
                <div className="text-sm font-semibold text-xfi-secondary mb-1">Burn</div>
                <div className="text-xs text-white/60">1% tx + 50% fees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎁</div>
                <div className="text-sm font-semibold text-xfi-accent mb-1">Rewards</div>
                <div className="text-xs text-white/60">65% total distribution</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
