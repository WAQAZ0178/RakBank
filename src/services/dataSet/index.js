const questions = [
  {
    id: 1,
    question: "How would you describe your investment knowledge?",
    options: [
      { option: "Novice", score: 1, isSelected: false },
      { option: "Intermediate", score: 2, isSelected: false },
      { option: "Advanced", score: 3, isSelected: false },
    ],
  },
  {
    id: 2,
    question: "Investment Duration",
    options: [
      { option: "Short-term (less than 1 year)", score: 1, isSelected: false },
      { option: "Medium-term (1-5 years)", score: 2, isSelected: false },
      { option: "Long-term (more than 5 years)", score: 3, isSelected: false },
    ],
  },
  {
    id: 3,
    question: "How comfortable are you with taking risks?",
    options: [
      { option: "Very risk-averse", score: 1, isSelected: false },
      { option: "Somewhat risk-averse", score: 2, isSelected: false },
      { option: "Neutral", score: 3, isSelected: false },
      { option: "Somewhat risk-tolerant", score: 4, isSelected: false },
      { option: "Very risk-tolerant", score: 5, isSelected: false },
    ],
  },
  {
    id: 4,
    question: "What percentage of your income are you willing to invest?",
    options: [
      { option: "Less than 10%", score: 1, isSelected: false },
      { option: "10-25%", score: 2, isSelected: false },
      { option: "25-50%", score: 3, isSelected: false },
      { option: "More than 50%", score: 4, isSelected: false },
    ],
  },
  {
    id: 5,
    question:
      "How would you react to a sudden drop in the value of your investments?",
    options: [
      { option: "Panic and sell immediately", score: 1, isSelected: false },
      {
        option: "Monitor closely and consider selling",
        score: 2,
        isSelected: false,
      },
      { option: "Hold and wait for recovery", score: 3, isSelected: false },
      {
        option: "See it as a buying opportunity and invest more",
        score: 4,
        isSelected: false,
      },
    ],
  },
];

export { questions };
