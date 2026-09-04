import { categoryLabels, type Product } from '@/content/products';
import { ProductIcon } from '@/components/illustrations/ProductIcons';
import { Badge } from '@/components/ui/Meta';
import './content.css';

export function ProductCard({ product }: { product: Product }) {
  const reviewed = new Date(`${product.priceCheckedAt}T12:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article className="card product-card">
      <ProductIcon category={product.category} className="product-card-icon" />

      <div className="product-card-body">
        <span className="product-card-category">{categoryLabels[product.category]}</span>
        <h3>{product.name}</h3>
        {product.euReach && <Badge tone="ok">EU REACH</Badge>}
        <p className="product-card-brand">{product.brand}</p>

        <p className="product-card-price">
          {product.priceApprox}
          <span className="product-card-price-date"> · preço visto em {reviewed}</span>
        </p>

        <p className="product-card-note">{product.editorialNote}</p>

        {product.forumSources && product.forumSources.length > 0 && (
          <div className="product-card-forums">
            <Badge tone="info">Visto em fóruns de tatuagem</Badge>
            <ul>
              {product.forumSources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                  <span className="text-muted"> — {source.org}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <a
          className="btn btn-secondary product-card-link"
          href={product.officialUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver no site oficial
          <span className="visually-hidden"> (abre em nova aba)</span>
        </a>
      </div>
    </article>
  );
}
