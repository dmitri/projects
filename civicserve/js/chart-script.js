// JavaScript for handling inline date range selection

function initInlineDateRangeSelector() {
    // Get DOM elements
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const applyDateRangeBtn = document.getElementById('applyDateRange');
    const timeButtons = document.querySelectorAll('.time-btn');
    
    // Set default date range (last 30 days)
    const today = new Date();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(today.getDate() - 30);
    
    // Format dates for input elements (YYYY-MM-DD)
    startDateInput.value = formatDateForInput(thirtyDaysAgo);
    endDateInput.value = formatDateForInput(today);
    
    // Function to format dates for input fields
    function formatDateForInput(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    
    // Function to format dates for display
    function formatDateForDisplay(dateString) {
      const date = new Date(dateString);
      const month = date.toLocaleString('default', { month: 'short' });
      const day = date.getDate();
      const year = date.getFullYear();
      return `${month} ${day}, ${year}`;
    }
    
    // Apply date range
    applyDateRangeBtn.addEventListener('click', function() {
      // Remove active class from all time buttons
      timeButtons.forEach(btn => {
        btn.classList.remove('active');
      });
      
      // Apply the selected date range
      applyCustomDateRange();
    });
    
    // Make time buttons deactivate the custom range
    timeButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Clear any custom selected state
        startDateInput.classList.remove('active-date-input');
        endDateInput.classList.remove('active-date-input');
      });
    });
    
    // Function to apply the custom date range
    function applyCustomDateRange() {
      const startDate = new Date(startDateInput.value);
      const endDate = new Date(endDateInput.value);
      
      // Validate dates
      if (isNaN(startDate) || isNaN(endDate)) {
        alert('Please enter valid dates');
        return;
      }
      
      if (startDate > endDate) {
        alert('Start date cannot be after end date!');
        return;
      }
      
      // Add visual indication that custom range is active
      startDateInput.classList.add('active-date-input');
      endDateInput.classList.add('active-date-input');
      
      // Format dates for display
      const formattedStartDate = formatDateForDisplay(startDateInput.value);
      const formattedEndDate = formatDateForDisplay(endDateInput.value);
      
      // Generate new categories for x-axis based on custom date range
      const newCategories = generateCustomDateCategories(startDate, endDate);
      
      // Add data for custom date range if it doesn't exist
      if (!processedTimePeriodsData.custom) {
        // Generate some sample data for the custom range
        // In a real app, this would likely come from an API call
        processedTimePeriodsData.custom = generateSampleDataForCustomRange();
      }
      
      // Current time period becomes 'custom'
      currentTimePeriod = 'custom';
      
      // Update all charts as you do with the preset time periods
      charts.forEach(chartObj => {
        // Update x-axis categories
        chartObj.chart.updateOptions({
          xaxis: {
            categories: newCategories
          }
        });
        
        // Update series data
        updateChartDataForCustomRange(chartObj, 'custom');
      });
      
      // Update metrics cards
      updateMetricsCards('custom');
      
      // Update the comparison text to show custom range
      document.querySelectorAll('.metrics-card-change').forEach(element => {
        element.textContent = `${formattedStartDate} - ${formattedEndDate}`;
      });
    }
    
    // Function to generate x-axis categories for a custom date range
    function generateCustomDateCategories(startDate, endDate) {
      // Same implementation as before
      const categories = [];
      const dateRange = endDate.getTime() - startDate.getTime();
      const dayRange = dateRange / (24 * 60 * 60 * 1000);
      
      // For short ranges (less than 14 days), show individual days
      if (dayRange <= 14) {
        for (let i = 0; i <= dayRange; i++) {
          const date = new Date(startDate);
          date.setDate(date.getDate() + i);
          // Format as "Jan 1" or "Feb 15"
          const month = date.toLocaleString('default', { month: 'short' });
          const day = date.getDate();
          categories.push(`${month} ${day}`);
        }
      }
      // For medium ranges (less than 60 days), show weeks
      else if (dayRange <= 60) {
        // Start with the first date
        categories.push(formatDateForDisplay(startDate));
        
        // Add intermediate points
        const pointCount = 3; // 5 points total including start and end
        const interval = dateRange / pointCount;
        
        for (let i = 1; i < pointCount; i++) {
          const date = new Date(startDate.getTime() + (interval * i));
          categories.push(formatDateForDisplay(date));
        }
        
        // End with the last date
        categories.push(formatDateForDisplay(endDate));
      }
      // For longer ranges, show months or quarters
      else {
        const monthDiff = (endDate.getFullYear() - startDate.getFullYear()) * 12 + 
                           (endDate.getMonth() - startDate.getMonth());
        
        if (monthDiff < 12) {
          // Show months for less than a year
          let currentDate = new Date(startDate);
          while (currentDate <= endDate) {
            categories.push(currentDate.toLocaleString('default', { month: 'short', year: '2-digit' }));
            currentDate.setMonth(currentDate.getMonth() + 1);
          }
        } else {
          // Show quarters for a year or more
          const startQuarter = Math.floor(startDate.getMonth() / 3) + 1;
          const startYear = startDate.getFullYear();
          const endQuarter = Math.floor(endDate.getMonth() / 3) + 1;
          const endYear = endDate.getFullYear();
          
          for (let year = startYear; year <= endYear; year++) {
            const firstQ = (year === startYear) ? startQuarter : 1;
            const lastQ = (year === endYear) ? endQuarter : 4;
            
            for (let q = firstQ; q <= lastQ; q++) {
              categories.push(`Q${q} '${String(year).slice(-2)}`);
            }
          }
        }
      }
      
      return categories;
    }
  
    // Keep the rest of the helper functions from the previous implementation
    function updateChartDataForCustomRange(chartObj, timePeriod) {
      if (chartObj.id === 'combinedAgencyChart') {
        // Update the combined agency chart
        const agencyChartIds = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6'];
        const agencyNames = [
          'Total', 
          'City Economic Development', 
          'EDO', 
          'Chamber', 
          'Downtown Association', 
          'Consultant'
        ];
        
        const updatedSeries = agencyChartIds.map((chartId, index) => {
          return {
            name: agencyNames[index],
            data: processedTimePeriodsData[timePeriod][chartId]
          };
        });
        
        chartObj.chart.updateSeries(updatedSeries);
      } else if (chartObj.id === 'chart7') {
        // Update the ratio chart (chart7)
        const publicData = [];
        const privateData = [];
        
        processedTimePeriodsData[timePeriod][chartObj.id].forEach(ratio => {
          // Calculate percentage split
          const total = 1 + 1/ratio;
          const publicPct = (1/total) * 100;
          const privatePct = ((1/ratio)/total) * 100;
          
          publicData.push(publicPct);
          privateData.push(privatePct);
        });
        
        chartObj.chart.updateSeries([
          {
            name: 'Public Investment',
            data: publicData
          },
          {
            name: 'Private Investment',
            data: privateData
          }
        ]);
      } else {
        // Update regular charts (8, 11, 12)
        chartObj.chart.updateSeries([{
          data: processedTimePeriodsData[timePeriod][chartObj.id]
        }]);
      }
    }
    
    // Generate sample data for custom range
    // In a real application, this would fetch data from an API
    function generateSampleDataForCustomRange() {
      // Create a sample data structure similar to the other time periods
      return {
        "chart1": [45, 65, 85, 95, 75], // Total
        "chart2": [25, 35, 45, 50, 40], // City Economic Development
        "chart3": [10, 15, 20, 25, 15], // EDO
        "chart4": [5, 8, 12, 10, 8],    // Chamber
        "chart5": [12, 18, 22, 20, 15], // Downtown Association
        "chart6": [3, 5, 8, 6, 4],      // Consultant
        
        // Indicator charts
        "chart7": ["1:4.2", "1:4.5", "1:5.0", "1:5.5", "1:5.2"], // Investment Ratio
        "chart8": [750, 780, 800, 850, 820], // Business Count
        "chart11": [25, 28, 32, 30, 26], // Leads
        "chart12": [36, 42, 48, 45, 40]  // Projects
      };
    }
    
    // Also add an entry for custom in the metrics cards data
    if (!metricsCardsData.custom) {
      metricsCardsData.custom = [
        {
          number: 85,
          percentage: 18,
          positive: true
        },
        {
          number: 178,
          percentage: 12,
          positive: true
        },
        {
          number: 32,
          percentage: -5,
          positive: false
        },
        {
          number: 420,
          percentage: 22,
          positive: true
        }
      ];
    }
    
    // Add some additional styling for active date inputs
    const style = document.createElement('style');
    style.textContent = `
      .active-date-input {
        border-color: #4CAF50 !important;
        box-shadow: 0 0 0 0.2rem rgba(76, 175, 80, 0.25) !important;
      }
    `;
    document.head.appendChild(style);
  }