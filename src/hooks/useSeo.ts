import { useEffect } from 'react';

export function useSeo(title: string, description?: string, icon?: string) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'description';
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    const isHome = window.location.pathname === '/';
    const targetIcon = icon || (isHome ? '/logo.png' : '/logo.png');
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = targetIcon.endsWith('.png') ? 'image/png' : 'image/jpeg';
    link.href = targetIcon;
  }, [title, description, icon]);
}