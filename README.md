# Энциклопедия «Слонология»

Глубокая интерактивная база знаний по биологии, анатомии, этологии, эволюции и ветеринарии слонов.

## Структура проекта

```
elephantology-wiki/
├── docs/
│   ├── anatomy/          # Анатомия слонов (8 статей)
│   ├── ethogram/         # Этограмма и поведение (5 статей)
│   ├── taxonomy/         # Таксономия и эволюция (1 статья)
│   ├── veterinary/       # Ветеринария и уход (3 статьи)
│   ├── glossary.md       # Словарь терминов (40+ определений)
│   ├── bibliography.md   # Библиография (24 источника)
│   └── index.md          # Главная страница
├── assets/books/         # PDF-ресурсы
├── mkdocs.yml            # Конфигурация MkDocs
└── README.md             # Этот файл
```

## Стандарт данных (Frontmatter)

Все статьи используют строгую YAML-схему:

```yaml
---
title: "Название статьи"
description: "Краткое описание (до 160 символов для SEO)"
tags:
  - тег-1
  - тег-2
difficulty: beginner|intermediate|advanced
last_reviewed: YYYY-MM-DD
references:
  - type: journal|book|report|website|standard
    title: "Название источника"
    path: "../assets/books/file.pdf"  # для PDF
    url: "https://..."                # для website
    doi: "10.xxxx/..."                # для journal
    isbn: "978-..."                   # для book
---
```

### Поля

| Поле | Обязательно | Описание |
|------|-------------|----------|
| `title` | ✅ | Название статьи на русском |
| `description` | ✅ | SEO-описание, до 160 символов |
| `tags` | ✅ | Массив тегов, lowercase, дефисы |
| `difficulty` | ✅ | `beginner` | `intermediate` | `advanced` |
| `last_reviewed` | ✅ | Дата последней проверки фактов, формат `YYYY-MM-DD` |
| `references` | ✅ | Массив источников с типизацией |

### Типы источников

| Тип | Когда использовать |
|-----|-------------------|
| `journal` | Статья в рецензируемом журнале с DOI |
| `book` | Книга с ISBN |
| `report` | Техотчёт, препринт, affidavit, исследовательский материал |
| `website` | Веб-ресурс с URL |
| `standard` | Стандарт или протокол организации (EAZA, AZA) |

## Добавление новой статьи

1. Создайте файл в соответствующей категории (`anatomy/`, `ethogram/`, `taxonomy/`, `veterinary/`)
2. Добавьте frontmatter по схеме выше
3. В конце статьи добавьте раздел Sources:

```markdown
---

## 📚 Источники

<div class="article-sources" markdown>

| Источник | Тип | Ссылка |
|----------|-----|--------|
| Название источника | PDF/Website | [ссылка](путь) |

</div>

---

*Последняя проверка актуальности: YYYY-MM-DD*
```

4. Обновите `bibliography.md` (добавьте источник в соответствующий раздел)
5. Обновите `mkdocs.yml` (добавьте статью в навигацию)

## Статистика

- **Статей:** 17
- **Источников:** 24
- **Терминов:** 40+
- **Разделов:** 4 (анатомия, этограмма, таксономия, ветеринария) + словарь + библиография

## Локальная разработка

```bash
# Установка зависимостей
pip install mkdocs-material

# Запуск локального сервера
mkdocs serve

# Сборка для продакшена
mkdocs build

# Проверка конфигурации
mkdocs build --strict
```

## Деплой

Проект автоматически деплоится на GitHub Pages через GitHub Actions при пуше в ветку `main`.

## Лицензия

Copyright © 2026 Энциклопедия «Слонология»

## Контрибьюция

1. Fork репозитория
2. Создайте ветку для фичи (`git checkout -b feature/amazing-feature`)
3. Commit изменения (`git commit -m 'Add amazing feature'`)
4. Push в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

**Важно:** Соблюдайте схему frontmatter и форматирование Sources в футере статей.
