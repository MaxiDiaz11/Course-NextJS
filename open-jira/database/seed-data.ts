interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  createdAt: number;
  status: string;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "PENDIENTE: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      description:
        "EN PROGRESO: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "in-progress",
    },
    {
      description:
        "TERMINADA: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, laudantium?",
      createdAt: Date.now(),
      status: "finished",
    },
  ],
};
