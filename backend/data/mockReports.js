const mockReports = [
    {
        id: 1,
        name: "Monthly Used Car Sales Report",
        category: "Sales",
        creationDate: "2024-06-01T09:00:00Z",
        description:
            "Analysis of used car sales performance for the month, including top models and sales trends.",
        details: {
            summary:
                "This report provides a comprehensive overview of used car sales for June 2024, including sales by model, average sale price, and top-performing salespeople.",
            stats: {
                totalSales: 124,
                topModel: "Nissan Qashqai",
                avgPrice: "£13,200",
                topSalesperson: "Jane Smith",
            },
            highlights: [
                "Sales increased by 8% compared to May.",
                "SUVs remain the most popular segment.",
                "Average days in stock dropped to 22.",
            ],
        },
    },
    {
        id: 2,
        name: "Service Department Performance",
        category: "Service",
        creationDate: "2024-06-02T10:30:00Z",
        description:
            "KPIs and customer satisfaction scores for the service department.",
        details: {
            summary:
                "KPIs for the service department, including completed jobs, average turnaround time, and customer satisfaction.",
            stats: {
                jobsCompleted: 312,
                avgTurnaround: "2.1 days",
                satisfaction: "94%",
            },
            highlights: [
                "Customer satisfaction improved by 3%.",
                "Recall work volume increased.",
                "Technician efficiency at 87%.",
            ],
        },
    },
    {
        id: 3,
        name: "Finance Applications Overview",
        category: "Finance",
        creationDate: "2024-06-03T11:15:00Z",
        description:
            "Summary of finance applications, approval rates, and average loan values.",
        details: {
            summary:
                "Overview of finance applications processed, approval rates, and average loan values for June 2024.",
            stats: {
                applications: 58,
                approvalRate: "81%",
                avgLoan: "£9,800",
            },
            highlights: [
                "Approval rate steady month-on-month.",
                "Average loan value up 5%.",
            ],
        },
    },
    {
        id: 4,
        name: "Motability Scheme Uptake",
        category: "Motability",
        creationDate: "2024-06-04T12:45:00Z",
        description:
            "Monthly report on Motability scheme sign-ups and customer demographics.",
        details: {
            summary:
                "Analysis of Motability scheme sign-ups, including customer demographics and vehicle preferences.",
            stats: {
                signUps: 19,
                avgAge: 54,
                mostPopularModel: "Hyundai Tucson",
            },
            highlights: [
                "Motability sign-ups increased by 2.",
                "SUVs are the most popular Motability vehicles.",
            ],
        },
    },
    {
        id: 5,
        name: "Customer Satisfaction (Aftersales)",
        category: "Customer Service",
        creationDate: "2024-06-05T14:00:00Z",
        description: "Survey results and feedback from aftersales customers.",
        details: {
            summary:
                "Results from aftersales customer satisfaction surveys, including NPS and key feedback themes.",
            stats: {
                nps: 72,
                positiveComments: 41,
                negativeComments: 3,
            },
            highlights: [
                "NPS increased by 4 points.",
                "Most common praise: friendly staff.",
            ],
        },
    },
    {
        id: 6,
        name: "Stock Turnover Analysis",
        category: "Stock",
        creationDate: "2024-06-06T15:30:00Z",
        description:
            "Analysis of vehicle stock turnover rates and inventory aging.",
        details: {
            summary:
                "Analysis of stock turnover, average days in stock, and aging inventory.",
            stats: {
                avgDaysInStock: 22,
                vehiclesOver60Days: 4,
                totalStock: 98,
            },
            highlights: [
                "Average days in stock improved by 2 days.",
                "Only 4 vehicles over 60 days in stock.",
            ],
        },
    },
    {
        id: 7,
        name: "Online Enquiry Conversion Rates",
        category: "Digital",
        creationDate: "2024-06-07T16:20:00Z",
        description:
            "Conversion rates for online enquiries to showroom visits and sales.",
        details: {
            summary:
                "Conversion rates from online enquiries to showroom visits and completed sales.",
            stats: {
                enquiries: 142,
                conversionToVisit: "27%",
                conversionToSale: "11%",
            },
            highlights: ["Conversion to sale up 2%."],
        },
    },
    {
        id: 8,
        name: "Part-Exchange Trends",
        category: "Sales",
        creationDate: "2024-06-08T17:10:00Z",
        description:
            "Trends in part-exchange vehicles, including average values and most common models.",
        details: {
            summary:
                "Analysis of part-exchange vehicles, average values, and most common models traded in.",
            stats: {
                avgPXValue: "£5,200",
                mostCommonPX: "Ford Fiesta",
                pxCount: 37,
            },
            highlights: [
                "Average PX value up £300.",
                "Ford Fiesta remains most common PX.",
            ],
        },
    },
    {
        id: 9,
        name: "EV Sales Growth",
        category: "Sales",
        creationDate: "2024-06-09T18:00:00Z",
        description: "Growth in electric vehicle sales and market share.",
        details: {
            summary:
                "Growth in electric vehicle sales, market share, and top-selling EV models.",
            stats: {
                evSales: 18,
                evShare: "14%",
                topEV: "Nissan Leaf",
            },
            highlights: ["EV market share up 3%."],
        },
    },
    {
        id: 10,
        name: "Warranty Claims Analysis",
        category: "Service",
        creationDate: "2024-06-10T19:00:00Z",
        description:
            "Analysis of warranty claims by type, frequency, and resolution time.",
        details: {
            summary:
                "Analysis of warranty claims, types, frequency, and average resolution time.",
            stats: {
                claims: 22,
                avgResolution: "3.2 days",
                mostCommonClaim: "Battery",
            },
            highlights: ["Average resolution time improved by 1 day."],
        },
    },
    {
        id: 11,
        name: "Marketing Campaign ROI",
        category: "Marketing",
        creationDate: "2024-06-11T20:00:00Z",
        description:
            "Return on investment for recent marketing campaigns, including digital and print.",
        details: {
            summary:
                "ROI for recent marketing campaigns, including digital and print channels.",
            stats: {
                totalSpend: "£4,200",
                leadsGenerated: 61,
                roi: "3.1x",
            },
            highlights: ["Digital campaigns outperformed print."],
        },
    },
    {
        id: 12,
        name: "Aftersales Upsell Performance",
        category: "Customer Service",
        creationDate: "2024-06-12T21:00:00Z",
        description:
            "Performance of aftersales upsell initiatives and customer retention.",
        details: {
            summary:
                "Performance of aftersales upsell initiatives and customer retention rates.",
            stats: {
                upsellRate: "18%",
                repeatCustomers: 27,
                avgUpsellValue: "£180",
            },
            highlights: ["Upsell rate up 2%."],
        },
    },
];

module.exports = mockReports;
