console.log("Ryan McWhirt's WEB-115.0001 Final Project");

// Function to validate the email address
function isValidEmail(email) {
    // Simple regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to generate the meal plan page
function generateMealPlanPage() {
    console.log("Generating meal plan page...");

    // Get user inputs
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userGoal = document.getElementById('userGoal').value;
    const day = document.getElementById('day').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

    // Validate email
    if (!isValidEmail(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    console.log("Email validated. Generating web page...");

    // Open a new window or tab
    const newWindow = window.open("", "_blank");

    if (newWindow) {
        // Use document.write() to populate the new page
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>${userName}'s Meal Plan</title>
                <style>
                    body {
                        font-family: monospace; /* Use monospaced font */
                        margin: 20px;
                        text-align: center;
                    }
                    h1 {
                        color: #4CAF50;
                    }
                    table {
                        width: 80%;
                        margin: 20px auto;
                        border-collapse: collapse;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 10px;
                    }
                    th {
                        background-color: #f4f4f4;
                    }
                </style>
            </head>
            <body>
                <h1>${userName}'s Weekly Meal Plan</h1>
                <p><strong>Email:</strong> ${userEmail}</p>
                <p><strong>Goal for the Week:</strong> ${userGoal}</p>
                <table>
                    <tr>
                        <th>Day</th>
                        <th>Meal</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>${day}</td>
                        <td>Breakfast</td>
                        <td>${breakfast}</td>
                    </tr>
                    <tr>
                        <td>${day}</td>
                        <td>Snack 1</td>
                        <td>${snack1}</td>
                    </tr>
                    <tr>
                        <td>${day}</td>
                        <td>Lunch</td>
                        <td>${lunch}</td>
                    </tr>
                    <tr>
                        <td>${day}</td>
                        <td>Snack 2</td>
                        <td>${snack2}</td>
                    </tr>
                    <tr>
                        <td>${day}</td>
                        <td>Dinner</td>
                        <td>${dinner}</td>
                    </tr>
                </table>
            </body>
            </html>
        `);

        newWindow.document.close();
        console.log("Meal plan page generated successfully.");
    } else {
        alert("Pop-up blocked! Please allow pop-ups for this website to generate the meal plan.");
    }
}

// Function to clear the planner
function clearPlanner() {
    document.getElementById('mealPlanForm').reset();
    alert("Planner has been cleared!");
}

// Function to print the planner
function printPlanner() {
    window.print();
}

// Function to download the planner as a text file
function downloadPlanner() {
    // Get user inputs
    const userName = document.getElementById('userName').value;
    const userGoal = document.getElementById('userGoal').value;
    const day = document.getElementById('day').value;
    const breakfast = document.getElementById('breakfast').value;
    const snack1 = document.getElementById('snack1').value;
    const lunch = document.getElementById('lunch').value;
    const snack2 = document.getElementById('snack2').value;
    const dinner = document.getElementById('dinner').value;

    // Create meal plan text
    const mealPlanText = `
${userName}'s Weekly Meal Plan
Goal for the Week: ${userGoal}

Day: ${day}
- Breakfast: ${breakfast}
- Snack 1: ${snack1}
- Lunch: ${lunch}
- Snack 2: ${snack2}
- Dinner: ${dinner}
    `;

    // Create a blob and trigger download
    const blob = new Blob([mealPlanText], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${userName}_Meal_Plan.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);

    console.log("Meal plan downloaded successfully.");
}
