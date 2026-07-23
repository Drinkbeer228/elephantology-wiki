---
hide:
  - navigation
  - toc
---

# Энциклопедия «Слонология»

**Слонология** — это интерактивная база знаний и структурированный датасет, собранный на основе современных академических исследований, ветеринарных протоколов и полевых этограмм.

Этот проект преодолевает пропасть между сухой академической наукой и практическим применением. Строгая разметка Markdown и YAML делает эти данные идеальным фундаментом не только для чтения, но и для интеграции в IT-экосистемы: от алгоритмов машинного обучения и Telegram-ботов до программирования логики поведения (Behavior Trees) в игровых движках.

---

## Состояние базы знаний

<div class="sa-stats sa-stats--project">
  <div class="sa-stat-row">
    <span class="sa-stat-label">Статей</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill" style="width: 60%"></div></div>
    <span class="sa-stat-value">18</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Источников</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill" style="width: 48%"></div></div>
    <span class="sa-stat-value">24</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Терминов</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill" style="width: 40%"></div></div>
    <span class="sa-stat-value">40+</span>
  </div>
  <div class="sa-stat-row">
    <span class="sa-stat-label">Разделов</span>
    <div class="sa-stat-bar"><div class="sa-stat-fill" style="width: 50%"></div></div>
    <span class="sa-stat-value">5</span>
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

!!! info "Структура данных"
    Все статьи используют стандартизированный YAML frontmatter с полями `title`, `description`, `tags`, `difficulty`, `last_reviewed` и типизированными `references`. Это обеспечивает машиночитаемость данных для будущей миграции в динамические приложения. Подробнее см. [README.md](https://github.com/Drinkbeer228/elephantology-wiki/blob/main/README.md).

<!-- GTA SA Map Legend — Navigation -->
<div class="sa-legend">
  <div class="sa-legend-title">MAP LEGEND</div>
  <a href="anatomy/" class="sa-legend-item active">
    <div class="sa-legend-dot dot-anatomy"></div>
    Анатомия
  </a>
  <a href="ethogram/" class="sa-legend-item">
    <div class="sa-legend-dot dot-ethogram"></div>
    Этограмма
  </a>
  <a href="taxonomy/" class="sa-legend-item">
    <div class="sa-legend-dot dot-taxonomy"></div>
    Таксономия
  </a>
  <a href="veterinary/" class="sa-legend-item">
    <div class="sa-legend-dot dot-vet"></div>
    Ветеринария
  </a>
  <a href="ecology/" class="sa-legend-item">
    <div class="sa-legend-dot dot-ecology"></div>
    Экология
  </a>
  <a href="glossary/" class="sa-legend-item">
    <div class="sa-legend-dot dot-glossary"></div>
    Словарь
  </a>
  <a href="bibliography/" class="sa-legend-item">
    <div class="sa-legend-dot dot-biblio"></div>
    Библиография
  </a>
</div>