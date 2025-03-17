import BookList from "@/components/ui/BookList";
import BookOverview from "@/components/ui/BookOverview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import {users} from "@/database/schema";
const Home = async() => {
//rmrm -rf .next
//npx next dev - clears next js cache and shows the error position in terminal exactly
        const result = await db.select().from(users);
        console.log(JSON.stringify(result,null,2));
  return(<div>
    <BookOverview {...sampleBooks[0]} />
    {/* to pass all details of books in constants */}
    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </div>)
  
};

export default Home;
