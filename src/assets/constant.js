import { FaBook, FaChartPie, FaLightbulb, FaTicketAlt, FaUsers, FaUserTie } from 'react-icons/fa';

export const menuData = [
    {
        title: 'Overview',
        icon: <FaChartPie style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Cases',
        icon: <FaTicketAlt style={{ marginRight: '0.5rem' }} />,
        active: true
    },
    {
        title: 'Measures',
        icon: <FaLightbulb style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Explore',
        icon: <FaUsers style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'Covid-19 Response Fund',
        icon: <FaUserTie style={{ marginRight: '0.5rem' }} />,
    },
    {
        title: 'WHO (Covid-19)',
        icon: <FaBook style={{ marginRight: '0.5rem' }} />,
    }
]


export const tableTitles = ["Name", "Cases - cumulative total", "Cases - newly reported in last 7 days", "Deaths - cumulative total", "Deaths - newly reported in last 7 days"]

export const data=[
    [
      "USA",
      "78,050,838",
      "529,249",
      "935,093",
      "13,109"
    ],
    [
      "India",
      "42,894,345",
      "114,110",
      "513,226",
      "2,321"
    ],
    [
      "Brazil",
      "28,484,890",
      "678,104",
      "646,419",
      "5,645"
    ],
    [
      "France",
      "21,484,890",
      "443,104",
      "134,723",
      "1,554"
    ],
    [
      "UK",
      "18,773,890",
      "274,106",
      "161,104",
      "883"
    ],
  ]