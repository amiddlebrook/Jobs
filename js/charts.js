/**
 * Charts Module - Jobs Data Analytics Platform
 * Wrapper for Chart.js with preconfigured styles matching our design system
 */

const Charts = {
    // Default colors from design tokens
    colors: {
        primary: '#6aa9ff',
        chart: ['#6aa9ff', '#10b981', '#f59e0b', '#ef4444', '#a855f7', '#ec4899', '#14b8a6', '#f97316'],
        tiers: {
            0: '#10b981',
            1: '#3b82f6',
            2: '#f59e0b',
            3: '#ef4444',
            4: '#a855f7',
            5: '#6b7280'
        },
        text: {
            primary: '#f0f4f8',
            secondary: '#a8b5c4',
            tertiary: '#6b7a8c'
        },
        grid: 'rgba(255, 255, 255, 0.06)',
        background: '#121924'
    },

    // Default font settings
    fonts: {
        family: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        size: 12
    },

    /**
     * Apply global Chart.js defaults
     */
    init() {
        if (typeof Chart === 'undefined') {
            console.warn('Chart.js not loaded');
            return;
        }

        Chart.defaults.color = this.colors.text.secondary;
        Chart.defaults.font.family = this.fonts.family;
        Chart.defaults.font.size = this.fonts.size;
        Chart.defaults.plugins.legend.labels.usePointStyle = true;
        Chart.defaults.plugins.legend.labels.padding = 16;
        Chart.defaults.plugins.tooltip.backgroundColor = '#1f2937';
        Chart.defaults.plugins.tooltip.titleColor = this.colors.text.primary;
        Chart.defaults.plugins.tooltip.bodyColor = this.colors.text.secondary;
        Chart.defaults.plugins.tooltip.borderColor = 'rgba(255, 255, 255, 0.1)';
        Chart.defaults.plugins.tooltip.borderWidth = 1;
        Chart.defaults.plugins.tooltip.cornerRadius = 8;
        Chart.defaults.plugins.tooltip.padding = 12;
    },

    /**
     * Create a salary bar chart
     */
    salaryBar(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: [{
                    label: options.label || 'Salary',
                    data: data.values,
                    backgroundColor: this.colors.chart.map(c => c + '80'),
                    borderColor: this.colors.chart,
                    borderWidth: 1,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: options.horizontal ? 'y' : 'x',
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    x: {
                        grid: { color: this.colors.grid },
                        ticks: {
                            callback: options.formatCurrency ? (v) => '$' + (v / 1000) + 'k' : undefined
                        }
                    },
                    y: {
                        grid: { color: this.colors.grid },
                        ticks: {
                            callback: options.formatCurrency ? (v) => '$' + (v / 1000) + 'k' : undefined
                        }
                    }
                }
            }
        });
    },

    /**
     * Create a line chart for trends
     */
    trendLine(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const datasets = data.datasets.map((ds, i) => ({
            label: ds.label,
            data: ds.values,
            borderColor: this.colors.chart[i % this.colors.chart.length],
            backgroundColor: this.colors.chart[i % this.colors.chart.length] + '20',
            fill: options.fill !== false,
            tension: 0.4,
            pointRadius: 3,
            pointHoverRadius: 6
        }));

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.labels,
                datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: {
                        display: datasets.length > 1,
                        position: 'bottom'
                    }
                },
                scales: {
                    x: { grid: { color: this.colors.grid } },
                    y: {
                        grid: { color: this.colors.grid },
                        beginAtZero: options.startAtZero !== false
                    }
                }
            }
        });
    },

    /**
     * Create a radar/spider chart for skills comparison
     */
    radar(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const datasets = data.datasets.map((ds, i) => ({
            label: ds.label,
            data: ds.values,
            borderColor: this.colors.chart[i % this.colors.chart.length],
            backgroundColor: this.colors.chart[i % this.colors.chart.length] + '30',
            pointBackgroundColor: this.colors.chart[i % this.colors.chart.length],
            pointBorderColor: '#fff',
            pointHoverRadius: 8
        }));

        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: data.labels,
                datasets
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: options.max || 100,
                        grid: { color: this.colors.grid },
                        angleLines: { color: this.colors.grid },
                        pointLabels: {
                            color: this.colors.text.secondary,
                            font: { size: 11 }
                        },
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: datasets.length > 1,
                        position: 'bottom'
                    }
                }
            }
        });
    },

    /**
     * Create a doughnut chart
     */
    doughnut(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.values,
                    backgroundColor: this.colors.chart,
                    borderColor: this.colors.background,
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: options.cutout || '70%',
                plugins: {
                    legend: {
                        display: options.showLegend !== false,
                        position: 'bottom'
                    }
                }
            }
        });
    },

    /**
     * Create a scatter plot
     */
    scatter(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        const datasets = data.datasets.map((ds, i) => ({
            label: ds.label,
            data: ds.points,
            backgroundColor: this.colors.chart[i % this.colors.chart.length] + '80',
            borderColor: this.colors.chart[i % this.colors.chart.length],
            pointRadius: options.bubbleSize ? ds.points.map(p => p.r || 8) : 8,
            pointHoverRadius: 12
        }));

        return new Chart(ctx, {
            type: options.bubble ? 'bubble' : 'scatter',
            data: { datasets },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: datasets.length > 1,
                        position: 'bottom'
                    },
                    tooltip: {
                        callbacks: {
                            label: (ctx) => {
                                const point = ctx.raw;
                                return `${options.xLabel || 'X'}: ${point.x}, ${options.yLabel || 'Y'}: ${point.y}`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: { color: this.colors.grid },
                        title: { display: !!options.xLabel, text: options.xLabel, color: this.colors.text.secondary }
                    },
                    y: {
                        grid: { color: this.colors.grid },
                        title: { display: !!options.yLabel, text: options.yLabel, color: this.colors.text.secondary }
                    }
                }
            }
        });
    },

    /**
     * Create a horizontal comparison bar
     */
    comparisonBar(canvasId, data, options = {}) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) return null;

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.labels,
                datasets: data.datasets.map((ds, i) => ({
                    label: ds.label,
                    data: ds.values,
                    backgroundColor: this.colors.chart[i],
                    borderRadius: 4
                }))
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: { position: 'top' }
                },
                scales: {
                    x: {
                        grid: { color: this.colors.grid },
                        stacked: options.stacked
                    },
                    y: {
                        grid: { display: false },
                        stacked: options.stacked
                    }
                }
            }
        });
    },

    /**
     * Destroy a chart instance
     */
    destroy(chartInstance) {
        if (chartInstance) {
            chartInstance.destroy();
        }
    }
};

// Initialize when Chart.js is available
if (typeof Chart !== 'undefined') {
    Charts.init();
} else {
    window.addEventListener('load', () => {
        if (typeof Chart !== 'undefined') {
            Charts.init();
        }
    });
}
