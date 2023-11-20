import { CreateItemForm } from "./_components/create-item-form";
import MaxWidthWrapper from "./_components/max-width-wrapper";

export default function Page(): JSX.Element {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col border border-gray-300 items-center justify-center text-center">
      <div className="border-gray-200 mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">Solana NFT Marketplace</p>
      </div>
      <CreateItemForm />
    </MaxWidthWrapper>
  );
}
