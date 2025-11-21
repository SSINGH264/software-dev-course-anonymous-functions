/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];


  // 🔹 Task 1: Filter Incomplete Tasks

let incomplete = todos.filter((todo) => todo.completed === false);
console.log(incomplete)
  
  // 🔹 Task 2: Sort Tasks by Priority
  
let priority = todos.sort((a, b) => a.priority - b.priority);
console.log(priority)

// 🔹 Task 3: Combine Filters


let incompleteSorted = todos
    .filter((todo) => !todo.completed)
    .sort((a, b) => a.priority - b.priority);

 console.log(incompleteSorted)

// 🔹 Task 4: Mark All Tasks as Completed

let completedTasks = todos.map((todo) => {
  todo.completed = true;
  return todo;
});

console.log(completedTasks)

