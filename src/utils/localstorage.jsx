const employees = [
  {
    id: 1,
    name: "Aarav",
    email: "ad@gmail.com",
    password: "123",
    contact: "9876543210",
    profilePic: "https://randomuser.me/api/portraits/men/1.jpg",
    department: "Sales",
    designation: "Sales Executive",
    // Count: 1 new, 1 active (accepted), 2 completed, 0 failed
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        taskTitle: "Prepare Sales Report",
        taskDescription: "Compile the weekly sales data and create a summary report.",
        taskDate: "2025-10-25",
        category: "Reporting",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Client Follow-Up Calls",
        taskDescription: "Call clients to gather feedback on the new product release.",
        taskDate: "2025-10-26",
        category: "Customer Relations",
        active: true, // New logic: Accepted by user --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "Inventory Check",
        taskDescription: "Audit the inventory and report low-stock items.",
        taskDate: "2025-10-28",
        category: "Operations",
        active: false,
        newTask: false,
        failed: false // --> Completed
      },
      {
        taskTitle: "Website Content Update",
        taskDescription: "Update homepage banners and refresh descriptions.",
        taskDate: "2025-10-27",
        category: "Marketing",
        active: false,
        newTask: false,
        failed: false // --> Completed
      }
    ]
  },
  {
    id: 2,
    name: "Rohan",
    email: "employee2@gmail.com",
    password: "pass234",
    contact: "9988776655",
    profilePic: "https://randomuser.me/api/portraits/men/2.jpg",
    department: "Development",
    designation: "Frontend Developer",
    // Count: 2 new, 2 active (accepted), 0 completed, 0 failed
    taskCounts: { active: 2, newTask: 2, completed: 0, failed: 0 },
    tasks: [
      {
        taskTitle: "Code Review",
        taskDescription: "Review code changes from the last sprint.",
        taskDate: "2025-10-26",
        category: "Development",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "UI Testing",
        taskDescription: "Run usability tests on the new dashboard.",
        taskDate: "2025-10-27",
        category: "QA",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Database Backup",
        taskDescription: "Perform full database backup and verify logs.",
        taskDate: "2025-10-29",
        category: "IT Support",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "Update Dependencies",
        taskDescription: "Upgrade outdated npm dependencies.",
        taskDate: "2025-10-30",
        category: "Development",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      }
    ]
  },
  {
    id: 3,
    name: "Arjun",
    email: "employee3@gmail.com",
    password: "abc789",
    contact: "8765432109",
    profilePic: "https://randomuser.me/api/portraits/men/3.jpg",
    department: "Finance",
    designation: "Financial Analyst",
    // Count: 1 new, 1 active (accepted), 1 completed, 0 failed
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Customer Feedback Survey",
        taskDescription: "Create and distribute a satisfaction survey.",
        taskDate: "2025-10-25",
        category: "Customer Relations",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "Monthly Expense Report",
        taskDescription: "Prepare financial summary for October.",
        taskDate: "2025-10-31",
        category: "Finance",
        active: false,
        newTask: false,
        failed: false // --> Completed
      },
      {
        taskTitle: "Team Lunch Arrangement",
        taskDescription: "Organize team lunch for Friday.",
        taskDate: "2025-10-28",
        category: "HR",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      }
    ]
  },
  {
    id: 4,
    name: "Vivaan",
    email: "employee4@gmail.com",
    password: "secure456",
    contact: "9012345678",
    profilePic: "https://randomuser.me/api/portraits/men/4.jpg",
    department: "IT Support",
    designation: "System Administrator",
    // Count: 1 new, 1 active (accepted), 1 completed, 0 failed
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "System Audit",
        taskDescription: "Check server health and resource utilization.",
        taskDate: "2025-10-26",
        category: "IT Support",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Bug Triage",
        taskDescription: "Prioritize newly reported issues.",
        taskDate: "2025-10-27",
        category: "QA",
        active: false,
        newTask: false,
        failed: false // --> Completed
      },
      {
        taskTitle: "Team Sync",
        taskDescription: "Attend sprint planning meeting.",
        taskDate: "2025-10-28",
        category: "Management",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    name: "Aditya",
    email: "employee5@gmail.com",
    password: "pwd567",
    contact: "9090909090",
    profilePic: "https://randomuser.me/api/portraits/men/5.jpg",
    department: "Business",
    designation: "Project Manager",
    // Count: 1 new, 1 active (accepted), 2 completed, 0 failed
    taskCounts: { active: 1, newTask: 1, completed: 2, failed: 0 },
    tasks: [
      {
        taskTitle: "Design Review",
        taskDescription: "Evaluate design proposals for the new app feature.",
        taskDate: "2025-10-26",
        category: "Design",
        active: false,
        newTask: false,
        failed: false // --> Completed
      },
      {
        taskTitle: "Client Proposal Draft",
        taskDescription: "Prepare a proposal for the upcoming project.",
        taskDate: "2025-10-27",
        category: "Business",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Update Marketing Strategy",
        taskDescription: "Revise the Q4 digital marketing plan.",
        taskDate: "2025-10-30",
        category: "Marketing",
        active: false,
        newTask: false,
        failed: false // --> Completed
      }
    ]
  },
  {
    id: 6,
    name: "Krishna",
    email: "employee6@gmail.com",
    password: "test123",
    contact: "9823456789",
    profilePic: "https://randomuser.me/api/portraits/men/6.jpg",
    department: "Data",
    designation: "Data Analyst",
    // Count: 1 new, 1 active (accepted), 0 completed, 1 failed
    taskCounts: { active: 1, newTask: 1, completed: 0, failed: 1 },
    tasks: [
      {
        taskTitle: "Data Cleanup",
        taskDescription: "Remove duplicate entries from customer database.",
        taskDate: "2025-10-26",
        category: "Data",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Generate Reports",
        taskDescription: "Create monthly performance analytics.",
        taskDate: "2025-10-27",
        category: "Reporting",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "Performance Review",
        taskDescription: "Review and finalize intern evaluation forms.",
        taskDate: "2025-10-29",
        category: "HR",
        active: false,
        newTask: false,
        failed: true // --> Failed
      }
    ]
  },
  {
    id: 7,
    name: "Sai",
    email: "employee7@gmail.com",
    password: "12345",
    contact: "9123456780",
    profilePic: "https://randomuser.me/api/portraits/men/7.jpg",
    department: "IT Support",
    designation: "Network Engineer",
    // Count: 1 new, 0 active, 1 completed, 0 failed
    taskCounts: { active: 0, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Server Maintenance",
        taskDescription: "Perform scheduled maintenance on staging servers.",
        taskDate: "2025-10-27",
        category: "IT Support",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Patch Deployment",
        taskDescription: "Deploy new security patch across production.",
        taskDate: "2025-10-28",
        category: "Development",
        active: false,
        newTask: false,
        failed: false // --> Completed
      }
    ]
  },
  {
    id: 8,
    name: "Ishaan",
    email: "employee8@gmail.com",
    password: "hello890",
    contact: "9345678901",
    profilePic: "https://randomuser.me/api/portraits/men/8.jpg",
    department: "Support",
    designation: "Customer Support Lead",
    // Count: 1 new, 1 active (accepted), 1 completed, 0 failed
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Customer Escalations",
        taskDescription: "Handle customer issues from the support portal.",
        taskDate: "2025-10-25",
        category: "Support",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "Train Support Staff",
        taskDescription: "Organize a refresher training session.",
        taskDate: "2025-10-29",
        category: "HR",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Create Help Docs",
        taskDescription: "Write new FAQs for the updated features.",
        taskDate: "2025-10-30",
        category: "Documentation",
        active: false,
        newTask: false,
        failed: false // --> Completed
      }
    ]
  },
  {
    id: 9,
    name: "Kabir",
    email: "employee9@gmail.com",
    password: "pwd321",
    contact: "9456789012",
    profilePic: "https://randomuser.me/api/portraits/men/9.jpg",
    department: "Sales",
    designation: "Sales Manager",
    // Count: 1 new, 0 active, 1 completed, 0 failed
    taskCounts: { active: 0, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "Product Demo",
        taskDescription: "Prepare a live demo for the client meeting.",
        taskDate: "2025-10-27",
        category: "Sales",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Lead Follow-Up",
        taskDescription: "Contact potential leads from last week’s event.",
        taskDate: "2025-10-28",
        category: "Sales",
        active: false,
        newTask: false,
        failed: false // --> Completed
      }
    ]
  },
  {
    id: 10,
    name: "Devansh",
    email: "employee10@gmail.com",
    password: "emp999",
    contact: "9567890123",
    profilePic: "https://randomuser.me/api/portraits/men/10.jpg",
    department: "QA",
    designation: "Quality Analyst",
    // Count: 1 new, 1 active (accepted), 1 completed, 0 failed
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        taskTitle: "App Testing",
        taskDescription: "Run end-to-end tests for the new mobile version.",
        taskDate: "2025-10-26",
        category: "QA",
        active: false, // New logic: Starts as New Task (not active)
        newTask: true, // --> New Task
        failed: false
      },
      {
        taskTitle: "Bug Reporting",
        taskDescription: "Log and categorize bugs found during testing.",
        taskDate: "2025-10-27",
        category: "QA",
        active: true, // Accepted --> Active
        newTask: false,
        failed: false
      },
      {
        taskTitle: "Documentation Review",
        taskDescription: "Ensure project documentation is up to date.",
        taskDate: "2025-10-30",
        category: "Documentation",
        active: false,
        newTask: false,
        failed: false // --> Completed
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@gmail.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};