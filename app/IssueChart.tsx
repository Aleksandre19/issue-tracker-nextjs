'use client';

import { Card } from '@radix-ui/themes';
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
} from 'recharts';

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data = [
    { label: 'Open', value: open },
    { label: 'In Progress', value: inProgress },
    { label: 'Closed', value: closed },
  ];
  return (
    <Card>
      <ResponsiveContainer width='100%' height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <CustomXAxis dataKey='label' />
          <CustomYAxis />
          <Bar
            dataKey='value'
            barSize={60}
            style={{ fill: 'var(--accent-9)' }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

function CustomXAxis({ dataKey = 'label', ...props }) {
  return <XAxis dataKey={dataKey} {...props} />;
}

function CustomYAxis({ dataKey = 'label', ...props }) {
  return <YAxis dataKey={dataKey} {...props} />;
}

export default IssueChart;
