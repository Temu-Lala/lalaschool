"use client";
import React, { useState, useEffect } from 'react';
import Datas from '../html.json';
import { useRouter, usePathname } from 'next/navigation';

function Page() {
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const [currentId, setCurrentId] = useState(() => {
    // Initialize state with ID from URL if available, otherwise default to 1
    const id = parseInt(pathname.split('/').pop(), 10); // Extract ID from the URL
    return isNaN(id) ? 1 : id;
  });

  useEffect(() => {
    const id = parseInt(pathname.split('/').pop(), 10); // Extract ID from the URL
    if (!isNaN(id) && id !== currentId) {
      setCurrentId(id);
    }
  }, [pathname, currentId]);

  const handleNext = () => {
    setCurrentId((prevId) => {
      const nextId = prevId + 1;
      if (Datas.some((item) => item.id === nextId)) {
        router.push(`/htmls/${nextId}`); // Update URL
        return nextId;
      }
      return prevId; 
    });
  };

  const handleBack = () => {
    setCurrentId((prevId) => {
      const prevIdUpdated = prevId - 1;
      if (Datas.some((item) => item.id === prevIdUpdated)) {
        router.push(`/htmls/${prevIdUpdated}`); // Update URL
        return prevIdUpdated;
      }
      return prevId; 
    });
  };

  const currentData = Datas.find((item) => item.id === currentId);

  return (
    <div>
      {currentData ? (
        <div>
          <h1>{currentData.title}</h1>
          <p >{currentData.description}</p>
        </div>
      ) : (
        <div>No data found</div>
      )}
      <button onClick={handleNext}>Next</button>
      <button onClick={handleBack}>Back</button>
    </div>
  );
}

export default Page;
