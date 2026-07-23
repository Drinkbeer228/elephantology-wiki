---
hide:
  - navigation
  - toc
---

# Энциклопедия «Слонология»

**Слонология** — это интерактивная база знаний и структурированный датасет, собранный на основе современных академических исследований, ветеринарных протоколов и полевых этограмм.

Этот проект преодолевает пропасть между сухой академической наукой и практическим применением. Строгая разметка Markdown и YAML делает эти данные идеальным фундаментом не только для чтения, но и для интеграции в IT-экосистемы: от алгоритмов машинного обучения и Telegram-ботов до программирования логики поведения (Behavior Trees) в игровых движках.

---

## Статистика проекта

<div class="sa-stats">
  <div class="sa-stat-row">
    <span class="sa-stat-label">Анатомия</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill anatomy"></div></div>
    <span class="sa-stat-value">8/10</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Этограмма</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill ethogram"></div></div>
    <span class="sa-stat-value">6/8</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Таксономия</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill taxonomy"></div></div>
    <span class="sa-stat-value">2/3</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Ветеринария</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill vet"></div></div>
    <span class="sa-stat-value">3/5</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Экология</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill ecology"></div></div>
    <span class="sa-stat-value">2/4</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Словарь</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill glossary"></div></div>
    <span class="sa-stat-value">40+/80</span>
  </div>
</div>

---

## Разделы

<div class="grid cards" markdown>

-   **Анатомия**

    ---

    Детальный разбор биомеханики, остеологии и внутренних органов. От устройства мышечного гидростата (хобота) до гравипортальной адаптации костей и полного отсутствия плевральной полости.

    → [Обзор раздела](anatomy/index.md)

-   **Этограмма и поведение**

    ---

    Строго размеченные поведенческие матрицы. Маркеры визуальной угрозы, ритуалы социальной интеграции, забота о потомстве и спектрограммы инфразвуковой коммуникации.

    → [Обзор раздела](ethogram/index.md)

-   **Таксономия и эволюция**

    ---

    Филогенез отряда Proboscidea, морфологические тренды, гигантизм, островная карликовость и современная микроэволюция под антропогенным давлением.

    → [Обзор раздела](taxonomy/index.md)

-   **Ветеринария и уход**

    ---

    Протоколы экстренного лечения EEHV, ухода за стопами, выхаживания слонят-сирот и реабилитации после травм.

    → [Обзор раздела](veterinary/index.md)

-   **Экология и социальная психология**

    ---

    Влияние браконьерства, culling и потери миграционных коридоров на популяции слонов. ПТСР, синдром «Elephant Breakdown», онтогенез и жизненный цикл.

    → [Обзор раздела](ecology/index.md)

-   **Словарь терминов**

    ---

    Алфавитический глоссарий с определениями ключевых терминов по анатомии, этологии, таксономии и ветеринарии.

    [:octicons-arrow-right-24: Открыть словарь](glossary.md)

-   **Библиография**

    ---

    Полный список источников, сгруппированных по типу: журнальные статьи, книги, веб-ресурсы, стандарты и PDF-материалы.

    [:octicons-arrow-right-24: Открыть библиографию](bibliography.md)

</div>

<br>

!!! tip "Навигация и поиск"
    Используйте **строку поиска** (в верхней панели) для мгновенного нахождения нужного термина, патологии или поведенческого паттерна. Все материалы связаны системой **тегов** — обращайте на них внимание под заголовком каждой статьи.

!!! info "Структура данных"
    Все статьи используют стандартизированный YAML frontmatter с полями `title`, `description`, `tags`, `difficulty`, `last_reviewed` и типизированными `references`. Это обеспечивает машиночитаемость данных для будущей миграции в динамические приложения. Подробнее см. [README.md](https://github.com/Drinkbeer228/elephantology-wiki/blob/main/README.md).