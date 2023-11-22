import clsx from "clsx";
import Link from "@docusaurus/Link";
import type { Props } from "@theme/PaginatorNavLink";
import { ArrowRight } from "@site/src/components/icons/ArrowRight";

export default function PaginatorNavLink(props: Props): JSX.Element {
  const { permalink, title, subLabel, isNext } = props;
  return (
    <Link
      className={clsx(
        "pagination-nav__link",
        isNext ? "pagination-nav__link--next" : "pagination-nav__link--prev"
      )}
      to={permalink}
    >
      <div className="pagination-nav__label">
        {!isNext && <ArrowRight />}
        {title}
        {isNext && <ArrowRight />}
      </div>
    </Link>
  );
}
