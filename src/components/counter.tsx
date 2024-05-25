"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <Card className="flex max-w-xs flex-col  items-center justify-center">
      <CardHeader>
        <CardTitle>{count}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </CardContent>
    </Card>
  );
}
