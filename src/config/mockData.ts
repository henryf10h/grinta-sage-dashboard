// Mock data & scenarios — replace with real WebSocket/API later.
export type ProtocolState = {
  btcPrice: number;
  gritPrice: number;
  deviation: number; // percentage, signed
  kp: number;
  ki: number;
  redemptionRate: number;
  rateDirection: "up" | "down" | "flat";
};

export const INITIAL_STATE: ProtocolState = {
  btcPrice: 60000,
  gritPrice: 0.995,
  deviation: 0.5,
  kp: 2.0,
  ki: 0.002,
  redemptionRate: 0.01,
  rateDirection: "flat",
};

export const CRASH_SCENARIO = {
  newBtc: 48000,
  newGrit: 0.93,
  newDeviation: 7.0,
  newKp: 2.5,
  newRate: 0.0175,
  direction: "up" as const,
  reasoning:
    "BTC crashed 20%. Deviation at 7%. Raising KP from 2.0 → 2.5 for stronger proportional correction. Keeping KI at 0.002 — integral is already accumulating.",
  txHash: "0xabc1234567890abcdef1234567890abcdef123def",
};

export const PUMP_SCENARIO = {
  newBtc: 72000,
  newGrit: 0.998,
  newDeviation: 0.2,
  newKp: 1.8,
  newRate: 0.008,
  direction: "down" as const,
  reasoning:
    "BTC rallied 20%. Deviation collapsed to 0.2%. Lowering KP from 2.0 → 1.8 — proportional pressure no longer needed. Holding KI steady to avoid over-correction.",
  txHash: "0xdef9876543210fedcba9876543210fedcba987abc",
};

export const VOYAGER_BASE = "https://sepolia.voyager.online/tx/";
