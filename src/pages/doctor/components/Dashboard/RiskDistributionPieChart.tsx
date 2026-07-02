import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const RiskDistributionPieChart = ({ data }) => {
  return (
    <div className="h-[450px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: "rgba(255, 255, 255, 0.8)", 
              borderRadius: "12px", 
              border: "none",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          />

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={140}
            paddingAngle={5}
            stroke="none"
          >
            {data.map((item, index) => (
              <Cell 
                key={index} 
                fill={item.fill} 
                className="hover:opacity-80 transition-opacity cursor-pointer outline-none"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};