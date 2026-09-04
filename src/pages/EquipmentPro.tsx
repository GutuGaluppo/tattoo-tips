import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { categoryLabels, products, type ProductCategory } from '@/content/products';
import { ProductCard } from '@/components/content/ProductCard';
import { Eyebrow } from '@/components/ui/Meta';
import { UntranslatedNotice } from '@/components/content/UntranslatedNotice';
import './pages.css';

const categoryOrder: ProductCategory[] = [
  'stencil',
  'film',
  'aftercare',
  'hygiene',
  'ink',
  'needle',
  'machine',
  'accessories',
];

export default function EquipmentPro() {
  useDocumentMeta({
    title: 'Equipamento pro',
    description:
      'Marcas e produtos de referência da linha profissional: stencil, pós-cuidado, tinta, agulha, cartucho e máquina, com preço aproximado e link oficial.',
  });

  const proProducts = products.filter((product) => product.tier === 'pro');

  return (
    <div className="container page">
      <UntranslatedNotice />
      <header className="page-header">
        <Eyebrow>Equipamento e materiais</Eyebrow>
        <h1>Linha profissional</h1>
        <p className="page-description">
          Preço aproximado, pesquisado em setembro de 2026 — varia por loja, região e câmbio. Link
          sempre para o site oficial da marca, nunca para link de afiliado. Quando a pesquisa
          encontrou uma discussão real em fórum de tatuagem sobre o produto, ela aparece citada;
          sem isso, fica só a nota editorial. O selo <strong>EU REACH</strong> em tinta indica que
          existe versão do fabricante compatível com a legislação europeia — confirme sempre o lote
          e a documentação técnica antes de usar em pele.
        </p>
      </header>

      {categoryOrder.map((category) => {
        const items = proProducts.filter((product) => product.category === category);
        if (items.length === 0) return null;

        return (
          <section key={category} className="section">
            <h2>{categoryLabels[category]}</h2>
            <div className="product-grid">
              {items.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
