import EmptyList from "@/components/global/EmptyList";
import { deleteProductAction, fetchAdminProducts } from "@/utils/actions";
import Link from "next/link";

import { formatCurrency } from "@/utils/format";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";

function DeleteProduct({ productId }: { productId: string }) {
  const deleteProduct = deleteProductAction.bind(null, { productId });
  return (
    <FormContainer action={deleteProduct}>
      <IconButton actionType="delete" />
    </FormContainer>
  );
}

const ProductsPage = async () => {
  const items = await fetchAdminProducts();
  if (items.length < 1) return <EmptyList />;

  return (
    <section>
      <Table>
        <TableCaption className="capitalize">
          total products: {items.length}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.length > 0 &&
            items.map((item) => {
              const { id: productId, name, company, price } = item;
              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link
                      href={`/products/${productId}`}
                      className="underline text-muted-foreground tracking-wide capitalize"
                    >
                      {name}
                    </Link>
                  </TableCell>
                  <TableCell>{company}</TableCell>
                  <TableCell>{formatCurrency(price)}</TableCell>
                  <TableCell className="flex items-center gap-x-2">
                    <Link href={`/admin/products/${productId}/edit`}>
                      <IconButton actionType="edit" />
                    </Link>
                    {<DeleteProduct productId={productId}/>}
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </section>
  );
};

export default ProductsPage;
