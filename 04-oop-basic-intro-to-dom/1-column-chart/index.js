export default class ColumnChart {
  element;
  chartHeight = 50;

  constructor({
                data = [],
                label = '',
                link = '',
                value = 0
              }={}) {
    this.data = data;
    this.label = label;
    this.link = link;
    this.value = value;

    this.render();
  }

  render() {
    const chart = document.createElement('div');

    chart.innerHTML = this.getChartTemplate()

    this.element = chart.firstElementChild;

    if (this.data.length) {
      this.element.classList.remove('column-chart_loading');
    }
  }

  getChartTemplate() {
    return `<div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}">
        <div class="column-chart__title">
          Total ${this.label}
          <a class="column-chart__link" href="${(this.link) ? this.link : ''}">${(this.link) ? 'View all' : ''}</a>
        </div>
        <div class="column-chart__container">
          <div data-element="header" class="column-chart__header">
            ${this.value}
          </div>
          <div data-element="body" class="column-chart__chart">
            ${this.getChartColumns(this.data)}
          </div>
        </div>
      </div>`
  }

  getChartColumns(data) {
    const maxValue = Math.max(...data);

    return data.map(item => {
        const scale = this.chartHeight / Math.max(...data);
        const percent = (item / maxValue * 100);

        return `<div style="--value:${Math.floor(item * scale)}" data-tooltip="${percent.toFixed(0)}%"></div>`;
      }).join("");

  }

  update(data) {
    this.data.innerHTML = this.getChartColumns(data);
  }

  remove () {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
