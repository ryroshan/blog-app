import Link from 'next/link';
import getFormatteddate from "@/lib/getFormattedDate";

type Post = {
    post : BlogPost
}
export default function ListItem({post}: Post) {
    const {date, id, title} = post;
    const formattedDate = getFormatteddate(date);

  return (
    <li className="mt-4 text-2xl text-white">
       <Link className='underline hover:text-black' href={`/posts/${id}/`}>
            {title}
       </Link>
       <br />
       <p className='text-sm mt-1'>{formattedDate}</p>
    </li>
  )
}
