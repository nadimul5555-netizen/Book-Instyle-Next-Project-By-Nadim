import { BooksType } from "@/app/AllTypes";
import { BooksContext } from "@/app/Context/Context";
import { useContext } from "react";
import { toast } from "react-toastify";

export type ReadRemoveProps = {
  Data: BooksType
}

const ReadRemove = ({ Data }: ReadRemoveProps) => {
  
    const {readBooks,setReadBooks}=useContext(BooksContext)

    const onRemove=(Data:BooksType)=>{
        const removeReadbooks =readBooks.filter(data=> Data.id !==data.id)
        setReadBooks(removeReadbooks)
        toast.error(`Successfully ${Data.bookName} is Removed from the list `)
    }

  return (
    <div>
           <button
              onClick={() => onRemove(Data)}
              className="
                inline-flex items-center gap-1.5
                rounded-lg
                border border-red-100
                bg-red-50
                px-3 py-2
                text-[10px] font-bold
                text-red-500
                transition-all duration-300
                hover:border-red-200
                hover:bg-red-500
                hover:text-white
                active:scale-95
              "
            >
              <span className="text-xs">✕</span>
              Remove
            </button>
    </div>
  )
}

export default ReadRemove;