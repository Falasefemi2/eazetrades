'use client'

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  { date: '1st', visits: 45 },
  { date: '2nd', visits: 85 },
  { date: '3rd', visits: 120 },
  { date: '4th', visits: 75 },
  { date: '5th', visits: 130 },
  { date: '6th', visits: 110 },
  { date: '7th', visits: 216 },
  { date: '8th', visits: 120 },
  { date: '9th', visits: 140 },
  { date: '10th', visits: 115 },
  { date: '11th', visits: 130 },
  { date: '12th', visits: 80 },
  { date: '13th', visits: 110 },
  { date: '14th', visits: 130 },
  { date: '15th', visits: 120 },
  { date: '16th', visits: 135 },
  { date: '17th', visits: 125 },
  { date: '18th', visits: 130 },
  { date: '19th', visits: 120 },
  { date: '20th', visits: 125 },
]

export default function AnalyticsChart() {
  const maxVisits = Math.max(...data.map(item => item.visits))
  const maxVisitPoint = data.find(item => item.visits === maxVisits)

  return (
    <div className="w-full p-6">
      <h2 className="text-lg font-semibold mb-4">Profile Visits</h2>
      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-[0.70rem] uppercase text-muted-foreground">
                            Visits
                          </span>
                          <span className="font-bold text-muted-foreground">
                            {payload[0].value}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }
                return null
              }}
            />
            <Line
              type="monotone"
              dataKey="visits"
              stroke="#818cf8"
              strokeWidth={2}
              dot={false}
              activeDot={{
                r: 4,
                style: { fill: "#818cf8" }
              }}
              fill="url(#gradient)"
            />
            {maxVisitPoint && (
              <g>
                <circle
                  cx={data.indexOf(maxVisitPoint) * (100 / (data.length - 1)) + '%'}
                  cy={200 - (maxVisitPoint.visits / maxVisits) * 200}
                  r="4"
                  fill="#818cf8"
                />
                <text
                  x={data.indexOf(maxVisitPoint) * (100 / (data.length - 1)) + '%'}
                  y={200 - (maxVisitPoint.visits / maxVisits) * 200 - 10}
                  textAnchor="middle"
                  fill="#6b7280"
                  fontSize="12"
                >
                  {maxVisitPoint.visits} visits
                </text>
              </g>
            )}
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818cf8" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
              </linearGradient>
            </defs>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

