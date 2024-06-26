"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function Counter({
  initialCount = 0,
}: {
  initialCount?: number;
}) {
  const [count, setCount] = useState(initialCount);

  return (
    <Card className="flex w-fit flex-col items-center justify-center">
      <CardHeader>
        <CardTitle data-testid="current-count">{count}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
        <Button onClick={() => setCount(initialCount)}>Reset</Button>
      </CardContent>
    </Card>
  );
}
