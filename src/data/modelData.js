const modelData = [
  {
    id: 1,
    name: "Sofia",
    age: 25,
    country: "Portugal",
    status: "busy",
    image:
      "https://images.unsplash.com/photo-1630567136459-7a8fa832c80e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMGdpcmwlMjBpbiUyMGJlYWNofGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Maya",
    age: 55,
    country: "India",
    status: "offline",
    image:
      "https://images.unsplash.com/photo-1576629679906-08e08bfaed82?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Chloe",
    age: 28,
    country: "France",
    status: "busy",
    image:
      "https://images.unsplash.com/photo-1606292274196-02cabe960952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Luna",
    age: 23,
    country: "Spain",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1594536717222-a97b5ce67f37?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Zara",
    age: 27,
    country: "Brazil",
    status: "offline",
    image:
      "https://images.unsplash.com/photo-1679584621166-1f50ae0fe4d1?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Emma",
    age: 65,
    country: "USA",
    status: "busy",
    image:
      "https://images.unsplash.com/photo-1619520166328-6eccd4fb8e71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Noor",
    age: 26,
    country: "Egypt",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1484399172022-72a90b12e3c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Aiko",
    age: 21,
    country: "Japan",
    status: "offline",
    image:
      "https://images.unsplash.com/photo-1630568001199-984008a7d6b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    name: "Olivia",
    age: 55,
    country: "Japan",
    status: "busy",
    image:
      "https://images.unsplash.com/photo-1522765312985-2a1e2bce9ad7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Olivia",
    age: 21,
    country: "Nepal",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1448376561459-dbe8868fa34c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Amelia",
    age: 54,
    country: "Egypt",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1727934404036-58e5b557288e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "Lily",
    age: 46,
    country: "USA",
    status: "online",
    image:
      "https://images.unsplash.com/flagged/photo-1556151994-b611e5ab3675?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 13,
    name: "Harper",
    age: 36,
    country: "Spain",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Mia",
    age: 60,
    country: "India",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1646198008289-9cdae21fd445?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "Evelyn",
    age: 18,
    country: "Nepal",
    status: "offline",
    image:
      "https://images.unsplash.com/photo-1527199372136-dff50c10ea34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    id: 16,
    name: "Kamala",
    age: 33,
    country: "India",
    status: "online",
    image:
      "https://images.unsplash.com/photo-1526411803240-adf6120a86e4?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default modelData;
