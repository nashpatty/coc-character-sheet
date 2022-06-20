import React from 'react';

class CharacterSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characteristics: {
                str: 50,
                dex: 60,
                int: 35,
                con: 65,
                app: 40,
                pow: 10,
                siz: 80,
                edu: 35,
                mov: 8,
            },
        };
        // TODO huh? what's going on here?
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const characteristics = this.state.characteristics;
        characteristics.str = event.target.value;
        this.setState({
            characteristics: characteristics,
        });
    }

    hardSuccess(num) {
        return Math.floor(num * 0.5);
    }

    extremeSuccess(num) {
        return Math.floor(num * 0.2);
    }

    render() {
        return (
            <div className="font-mono sm:container sm:mx-auto p-4">
                <div>characteristics</div>
                <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex justify-evenly">
                        <label htmlFor="" className="px-2">
                            STR
                        </label>
                        <input
                            type="number"
                            className="rounded border w-12 text-sm"
                            value={this.state.characteristics.str}
                            onChange={this.handleChange}
                        />
                        <input
                            type="number"
                            className="rounded border w-12 text-sm read-only"
                            value={this.hardSuccess(
                                this.state.characteristics.str
                            )}
                        />
                        <input
                            type="number"
                            className="rounded border w-12 text-sm read-only"
                            value={this.extremeSuccess(
                                this.state.characteristics.str
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterSheet;
