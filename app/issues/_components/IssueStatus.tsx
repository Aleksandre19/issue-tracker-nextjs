'use client';

import { Issue, Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const IssueStatus = ({ issue }: { issue: Issue }) => {
  const [currentStatus, setCurrentStatus] = useState<Status>(issue.status);
  const router = useRouter();

  // Get the status list.
  const statusList = Object.keys(Status);

  const handleStatusChange = async (status: Status) => {
    await axios
      .patch(`/api/issues/${issue.id}`, {
        status,
      })
      .catch(() => {
        toast.error('Changes could not be saved.');
      });

    setCurrentStatus(status);

    // Invalidate the route cache.
    router.refresh();
  };
  return (
    <Select.Root onValueChange={handleStatusChange}>
      <Select.Trigger placeholder={currentStatus} />
      <Select.Content>
        {statusList.map((status) => (
          <Select.Item
            key={status}
            value={status}
            disabled={status === currentStatus}
          >
            {status}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatus;
