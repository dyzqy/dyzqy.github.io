const fetchContributions = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/events`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // Process the events to count contributions per day
    const contributions = {};
    data.forEach(event => {
        const date = event.created_at.split('T')[0]; // Get the date part
        if (!contributions[date]) {
            contributions[date] = 0;
        }
        contributions[date]++;
    });

    // Convert contributions object to array
    const contributionArray = Object.keys(contributions).map(date => ({
        date: date,
        contributionCount: contributions[date]
    }));

    return contributionArray;
};

const prepareChartData = (contributions) => {
    const dates = contributions.map(item => item.date);
    const counts = contributions.map(item => item.contributionCount);
    return { dates, counts };
};

const createChart = (dates, contributions) => {
    const ctx = document.getElementById('contributionsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: dates,
            datasets: [{
                label: 'Contributions',
                data: contributions,
                backgroundColor: 'rgb(113, 227, 180)',
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Date'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Contributions'
                    },
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Daily Contributions'
                }
            }
        }
    });
};

const init = async () => {
    const username = 'dyzqy';  // Replace with your GitHub username
    try {
        const contributions = await fetchContributions(username);
        const { dates, counts } = prepareChartData(contributions);
        createChart(dates, counts);
    } catch (error) {
        console.error('Error fetching contributions:', error);
    }
};

init();
