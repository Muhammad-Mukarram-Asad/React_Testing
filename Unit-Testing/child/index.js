import React from 'react'
import { useRouter } from 'next/router'
function ChildOne() {
    const router = useRouter();

    const backToHome = () => {
        router.back();
    }
  return (
    <div>
        <h1> Welcome to Next.Js Child Component</h1>
        <p>If you want to move back, then click the following button:</p>
        <button data-testid="child_btn" onClick={backToHome}>Parent Here</button>
      
    </div>
  )
}

export default ChildOne
