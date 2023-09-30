import { useRouter } from "next/router";

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <h1>User Detail</h1>
      <p>This is the user detail page 
        {' '} 
        {id} 
        {' '}
      </p>
    </div>
  );
} 