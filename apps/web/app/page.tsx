import { CreateItemForm } from "./_components/create-item-form";
import MaxWidthWrapper from "./_components/max-width-wrapper";

export default function Page(): JSX.Element {
  return (
    <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'>
      <CreateItemForm />
    </MaxWidthWrapper>
  )
}
